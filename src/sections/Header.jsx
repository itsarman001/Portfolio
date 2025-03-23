import { Logo, ModeToggle } from "../components";

export const Header = () => {
  return (
    <header className="flex justify-between items-end">
      <Logo />
      <nav className="flex items-center gap-2.5">
        <ul className="flex items-center gap-2">
          <li>
            <a
              href="#experience-section"
              className="relative block w-fit leading-[1.2rem] rounded-lg p-0 text-base text-primary/90 whitespace-nowrap sm:px-2 sm:py-1"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#project-section"
              className="relative block w-fit leading-[1.2rem] rounded-lg p-0 text-base text-primary/90 whitespace-nowrap sm:px-2 sm:py-1"
            >
              Projects
            </a>
          </li>
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
};
