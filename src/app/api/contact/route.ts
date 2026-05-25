import { NextResponse } from "next/server";

interface ContactRequestBody {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEGRAM_API_BASE_URL = "https://api.telegram.org";

function normalizeTelegramEnvValue(value: string): string {
  let v = value.trim();
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    v = v.slice(1, -1).trim();
  }

  return v;
}

function getStringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validateContactRequest(body: ContactRequestBody) {
  const name = getStringValue(body.name);
  const email = getStringValue(body.email);
  const message = getStringValue(body.message);

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { error: "Enter a valid email address." };
  }

  if (name.length > 120) {
    return { error: "Name must be 120 characters or fewer." };
  }

  if (email.length > 180) {
    return { error: "Email must be 180 characters or fewer." };
  }

  if (message.length > 3000) {
    return { error: "Message must be 3000 characters or fewer." };
  }

  return { values: { name, email, message } };
}

function createTelegramMessage(values: {
  name: string;
  email: string;
  message: string;
}) {
  return [
    "New portfolio contact message",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    "",
    values.message,
  ].join("\n");
}

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json(
      { message: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const validation = validateContactRequest(body);

  if ("error" in validation) {
    return NextResponse.json({ message: validation.error }, { status: 400 });
  }

  const botToken = normalizeTelegramEnvValue(
    process.env.TELEGRAM_BOT_TOKEN ?? "",
  );
  const chatId = normalizeTelegramEnvValue(
    process.env.TELEGRAM_CHAT_ID ?? "",
  );

  if (!botToken || !chatId) {
    return NextResponse.json(
      { message: "Contact notifications are not configured yet." },
      { status: 500 },
    );
  }

  const telegramResponse = await fetch(
    `${TELEGRAM_API_BASE_URL}/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: createTelegramMessage(validation.values),
        disable_web_page_preview: true,
      }),
    },
  );

  if (!telegramResponse.ok) {
    const telegramBodyText = await telegramResponse.text();

    console.error(
      "Telegram contact notification failed",
      telegramResponse.status,
      telegramBodyText,
    );

    if (telegramBodyText.includes("chat not found")) {
      console.error(
        'Telegram: set TELEGRAM_CHAT_ID to your numeric user id. Open your bot in Telegram, send /start, then confirm "chat"."id" from GET https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates.',
      );
    }

    return NextResponse.json(
      { message: "Message could not be sent right now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Message sent successfully." });
}
