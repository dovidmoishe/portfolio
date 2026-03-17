const githubUsername = "dovidmoishe";

const GithubContributions = () => {
  return (
    <section
      id="github-contributions"
      className="mt-[60px] md:mt-[80px] lg:mt-[100px] px-[16px] md:px-[32px] lg:px-[64px]"
    >
      <div className="border border-black/20 rounded-[20px] p-[20px] md:p-[28px] lg:p-[32px] bg-white">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="opacity-[0.7] text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[28px] md:leading-[32px] lg:leading-[36px]">
              GitHub
            </p>
            <p className="leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold text-[24px] md:text-[28px] lg:text-[30px]">
              Contributions
            </p>
          </div>
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] md:text-[15px] lg:text-[16px] underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            View profile
          </a>
        </div>

        <div className="mt-[20px] md:mt-[28px] lg:mt-[32px] overflow-x-auto">
          <div className="min-w-[720px]">
            <img
              src={`https://ghchart.rshah.org/000000/${githubUsername}`}
              alt={`${githubUsername} GitHub contribution chart`}
              className="w-full h-auto grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubContributions;
