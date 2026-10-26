import Tags from "./Tags.jsx";

export default function Work() {
  return (
    <section
      className="work-section  wrap mx-auto max-w-[1276px] px-[22px] tablet:px-8 desktop:px-12 section-space py-[62px] tablet:py-24"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-heading mb-[30px] tablet:mb-[46px] tablet:flex tablet:items-end tablet:justify-between tablet:gap-[60px]">
        <h2 id="work-title">
          A closer look at
          <br />
          the work.
        </h2>
        <p>
          From payment flows to API checks, I bring a practical, detail-focused
          approach to software quality.
        </p>
      </div>
      <article className="work-feature grid grid-cols-1 items-center gap-7 tablet:grid-cols-2 tablet:gap-8 desktop:gap-[54px]">
        <div className="work-visual flex min-h-[300px] flex-col justify-between rounded-xl bg-blue p-7 text-white tablet:min-h-[340px] tablet:p-9">
          <div
            className="payment-flow"
            aria-label="Payment domain experience: billing, payment, verification"
          >
            <span>Billing</span>
            <span aria-hidden="true">→</span>
            <span>Payment</span>
            <span aria-hidden="true">→</span>
            <span>Verification</span>
          </div>
          <div className="visual-caption">Fintech &amp; payment systems</div>
          <p>
            Testing the journeys
            <br />
            where details count.
          </p>
        </div>
        <div className="work-copy">
          <p className="work-context">SPE Solution · Jan 2020 – May 2021</p>
          <h3>Quality across payment products.</h3>
          <p>
            I tested fintech billing and payment products, including BNI Student
            Payment Centre, PPOB, TAP, E-PBB and Rewash Laundry.
          </p>
          <ul>
            <li>
              Turned functional and technical specifications into test cases.
            </li>
            <li>Executed manual tests across web, mobile and APIs.</li>
            <li>
              Tracked defects in Trello, retested fixes and completed UAT and
              production documentation.
            </li>
            <li>Created automated tests with Robot Framework.</li>
          </ul>
          <Tags items={["Manual testing", "Robot Framework", "UAT"]} />
        </div>
      </article>
      <div className="work-secondary mt-8 grid grid-cols-1 gap-[30px] tablet:mt-11 tablet:grid-cols-2 tablet:gap-8 desktop:gap-[54px]">
        <article>
          <p className="work-context">KoinWorks · Oct 2021 – Dec 2024</p>
          <h3>Testing through the release cycle.</h3>
          <p>
            Created and executed test plans for web, Android, iOS and APIs, used
            Katalon for automation, and collaborated with product and
            engineering teams on integration, functional and regression testing
            in two-week Scrum release cycles.
          </p>
          <Tags items={["Katalon", "TestRail", "Jira"]} />
        </article>
        <article>
          <p className="work-context">PT Finnet Indonesia · May – Oct 2021</p>
          <h3>API checks, ready for UAT.</h3>
          <p>
            Built API automation with Newman to validate specification values,
            prepared web, mobile and API test plans, executed tests in UAT, and
            completed delivery documentation.
          </p>
          <Tags items={["Newman", "API testing", "UAT"]} />
        </article>
      </div>
    </section>
  );
}
