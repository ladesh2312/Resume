export default function ExperienceRole({ role }) {
  return (
    <article className="role relative mb-[29px] border-b border-line pb-[30px]">
      <p className="role-date mb-[11px] flex flex-wrap items-center gap-3 text-[11px] text-muted tabular-nums">
        {role.date}
        {role.current && (
          <span className="rounded bg-[#e8efff] px-2 py-0.5 text-[9px] text-[#244693]">
            Current role
          </span>
        )}
      </p>
      <h3>{role.title}</h3>
      <p className="company">{role.company}</p>
      <p>{role.description}</p>
    </article>
  );
}
