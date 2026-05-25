type ClassValue = string | number | boolean | null | undefined;

export function cn(...inputs: ClassValue[]) {
  return inputs
    .flatMap((value) => {
      if (typeof value === "string" || typeof value === "number") {
        return String(value);
      }
      return [];
    })
    .join(" ");
}
