export default function About() {
  return (
    <section
      className="about-section grid grid-cols-1 gap-7 !pt-0 tablet:grid-cols-[1.35fr_1fr] tablet:gap-[55px] desktop:gap-[110px] wrap mx-auto max-w-[1276px] px-[22px] tablet:px-8 desktop:px-12 section-space py-[62px] tablet:py-24"
      id="about"
      aria-labelledby="about-title"
    >
      <div>
        <h2 id="about-title">A little about me.</h2>
        <p className="about-lead">
          I like understanding how things work.
          <br />
          And finding where they could work better.
        </p>
        <p>
          I’m Lades Hutabarat, a software quality assurance professional based
          in Indonesia. My background spans electronics testing, quality
          control, research applications and financial technology.
        </p>
        <p>
          That mix shapes how I approach testing: understand the requirements,
          ask useful questions, document clearly, and work closely with the
          people building the product.
        </p>
        <p>Outside work, I enjoy travelling, games and listening to music.</p>
      </div>
      <aside
        className="education self-start rounded-xl bg-[#eaf0f8] p-[26px] tablet:p-8"
        aria-label="Education and languages"
      >
        <div>
          <h3>Education</h3>
          <p className="degree">Associate’s Degree</p>
          <p>Politeknik Negeri Medan</p>
          <p className="small">
            Oct 2011 – Oct 2014
            <br />
            GPA 3.32 / 4.00
          </p>
        </div>
        <div>
          <h3>Languages</h3>
          <p>
            Indonesian <span>Proficient</span>
          </p>
          <p>
            English <span>Intermediate</span>
          </p>
        </div>
      </aside>
    </section>
  );
}
