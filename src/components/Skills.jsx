export default function Skills() {
  return (
    <section
      className="skills-section  wrap mx-auto max-w-[1276px] px-[22px] tablet:px-8 desktop:px-12 section-space py-[62px] tablet:py-24"
      aria-labelledby="skills-title"
    >
      <div className="section-heading mb-[30px] tablet:mb-[46px] tablet:flex tablet:items-end tablet:justify-between tablet:gap-[60px]">
        <h2 id="skills-title">
          The right tools.
          <br />A curious mindset.
        </h2>
        <p>
          Strong testing combines practical tools with clear communication,
          critical thinking and attention to detail.
        </p>
      </div>
      <div className="skill-list">
        <div>
          <h3>Testing &amp; coverage</h3>
          <p>
            Manual testing · Web testing · Mobile testing · API testing ·
            Functional testing · Integration testing · Regression testing · UAT
            · Sanity testing
          </p>
        </div>
        <div>
          <h3>Automation &amp; tools</h3>
          <p>
            Katalon · Robot Framework · Postman · Newman · Chucker · Firebase ·
            TestFlight · TestRail · Jira · Trello
          </p>
        </div>
        <div>
          <h3>Collaboration &amp; delivery</h3>
          <p>
            Agile &amp; Scrum · Requirements analysis · Test planning · Bug
            reporting · Documentation · Problem solving · Time management ·
            Adaptability
          </p>
        </div>
      </div>
    </section>
  );
}
