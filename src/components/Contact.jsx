export default function Contact() {
  return (
    <section
      className="contact-section bg-[#e2ebfc] py-[53px] tablet:py-[75px]"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="wrap mx-auto max-w-[1276px] px-[22px] tablet:px-8 desktop:px-12">
        <div>
          <h2 id="contact-title">
            Let’s build
            <br />
            something <em>reliable.</em>
          </h2>
          <p>
            Have a QA opportunity or a project in mind?
            <br />
            I’d love to hear about it.
          </p>
        </div>
        <div className="contact-actions mt-[33px] flex flex-col items-start gap-[22px] tablet:mt-0 tablet:gap-6">
          <a className="email-link" href="mailto:qatest2312@gmail.com">
            qatest2312@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link inline-flex items-center gap-3 text-xs font-[650] underline decoration-[#a5b3c8] underline-offset-[5px] tablet:text-[13px]"
            href="/assets/Resume_Lades.pdf"
            download
          >
            Download my résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
