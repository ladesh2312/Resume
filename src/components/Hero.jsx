export default function Hero() {
  return (
    <section
      className="hero grid grid-cols-1 items-center gap-[38px] pt-[35px] pb-12 tablet:grid-cols-[1.15fr_1fr] tablet:gap-[35px] tablet:pt-[60px] tablet:pb-[85px] desktop:grid-cols-[1.22fr_1fr] desktop:gap-[68px] wide:pt-[82px] wide:pb-[110px] wrap mx-auto max-w-[1276px] px-[22px] tablet:px-8 desktop:px-12"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="intro">Hi, I’m Lades. A Software QA Engineer.</p>
        <h1 id="hero-title">
          Confidence in
          <br />
          every <em>release.</em>
        </h1>
        <p className="hero-description">
          I turn requirements into thoughtful tests, find the details that
          matter, and help teams build software people can rely on.
        </p>
        <div className="hero-actions flex flex-wrap items-center gap-5 tablet:gap-[18px] desktop:gap-[27px]">
          <a
            className="button inline-flex cursor-pointer items-center justify-center gap-[18px] rounded-lg px-[17px] py-[14px] text-xs font-[650] transition-colors duration-200 tablet:gap-[27px] tablet:px-[22px] tablet:py-[15px] tablet:text-[13px] primary bg-blue text-white hover:bg-blue-hover hover:text-white"
            href="#work"
          >
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link inline-flex items-center gap-3 text-xs font-[650] underline decoration-[#a5b3c8] underline-offset-[5px] tablet:text-[13px]"
            href="/assets/Resume_Lades.pdf"
            download
          >
            Download résumé{" "}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3v12m-4-4 4 4 4-4M5 16v5h14v-5"></path>
            </svg>
          </a>
        </div>
        <p className="location">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"></path>
            <circle cx="12" cy="10" r="2.5"></circle>
          </svg>{" "}
          Based in Indonesia <span>·</span> Web / Mobile / API
        </p>
      </div>
      <div
        className="coverage"
        aria-label="My testing approach: review requirements, plan tests for web, mobile and API, report and retest"
      >
        <div className="coverage-header">
          <span>Quality, from the inside out.</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m8 5-7 7 7 7m8-14 7 7-7 7m-5 0 2-14"></path>
          </svg>
        </div>
        <div className="flow-start">
          <span className="flow-dot"></span>
          <span>Understand the requirements</span>
        </div>
        <div className="connector"></div>
        <div className="flow-plan">
          Design the test plan<small>Scenarios. Coverage. Edge cases.</small>
        </div>
        <div className="branches" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="platforms">
          <div>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="4" width="18" height="13" rx="2"></rect>
              <path d="M8 21h8m-4-4v4M3 8h18"></path>
            </svg>
            <span>Web</span>
          </div>
          <div>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="6" y="2" width="12" height="20" rx="3"></rect>
              <path d="M10 18h4"></path>
            </svg>
            <span>Mobile</span>
          </div>
          <div>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m8 5-7 7 7 7m8-14 7 7-7 7"></path>
            </svg>
            <span>API</span>
          </div>
        </div>
        <div className="coverage-foot">
          <span className="loop-icon" aria-hidden="true">
            ↻
          </span>
          <span>
            Test. Report. Retest.<small>Quality is a team effort.</small>
          </span>
        </div>
      </div>
    </section>
  );
}
