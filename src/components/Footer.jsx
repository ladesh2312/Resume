export default function Footer() {
  return (
    <footer className="wrap mx-auto max-w-[1276px] px-[22px] tablet:px-8 desktop:px-12">
      <p>
        © <span>{new Date().getFullYear()}</span> Lades Hutabarat
      </p>
      <p>Thoughtful testing. Better software.</p>
      <a href="#main">
        Back to top <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
