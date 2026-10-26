export default function Header() {
  return (
    <header className="site-header flex h-[88px] items-center justify-between gap-6 tablet:h-28 wrap mx-auto max-w-[1276px] px-[22px] tablet:px-8 desktop:px-12">
      <a
        className="brand flex items-center gap-[9px] text-xs font-[650] tablet:gap-4 tablet:text-sm"
        href="#"
        aria-label="Lades Hutabarat home"
      >
        <span
          className="brand-mark text-[33px] leading-none font-extrabold tracking-[-.08em] tablet:text-[39px]"
          aria-hidden="true"
        >
          lh<span>.</span>
        </span>
        <span>Lades Hutabarat</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a
          className="nav-contact rounded-lg border border-line px-3 py-2 hover:border-blue tablet:px-[18px] tablet:py-[10px]"
          href="#contact"
        >
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
