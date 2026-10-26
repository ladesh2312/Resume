import { experience } from "../data/experience.js";
import ExperienceRole from "./ExperienceRole.jsx";

export default function Experience() {
  return (
    <section
      className="experience-section bg-paper section-space py-[62px] tablet:py-24"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="wrap mx-auto max-w-[1276px] px-[22px] tablet:px-8 desktop:px-12 experience-layout grid grid-cols-1 gap-[38px] tablet:grid-cols-[.85fr_1.15fr] tablet:gap-[50px] desktop:gap-[90px]">
        <div className="experience-intro self-start tablet:sticky tablet:top-10">
          <h2 id="experience-title">
            Built on
            <br />
            hands-on experience.
          </h2>
          <p>
            My path has taken me from electronics and hardware testing to the
            software teams building everyday digital products.
          </p>
          <a
            className="text-link inline-flex items-center gap-3 text-xs font-[650] underline decoration-[#a5b3c8] underline-offset-[5px] tablet:text-[13px]"
            href="/assets/Resume_Lades.pdf"
            download
          >
            Get the full résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="timeline ml-[5px] border-l border-line pl-[25px] tablet:ml-0 tablet:pl-[30px]">
          {experience.slice(0, 4).map((role) => (
            <ExperienceRole key={role.company} role={role} />
          ))}

          <details className="earlier">
            <summary>
              Earlier experience <span aria-hidden="true">+</span>
            </summary>
            <div className="earlier-roles">
              {experience.slice(4).map((role) => (
                <ExperienceRole key={role.company} role={role} />
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
