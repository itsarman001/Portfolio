import { useNavigateTo, useScrollToTop } from "@/hooks";
import { Logo, ModeToggle } from "@/components";

export const Header = () => {
  const LINKS = [
    { label: "Experience", path: "#experience-section", external: false },
    { label: "Projects", path: "#projects-section", external: false },
  ];

  const navigateTo = useNavigateTo();
  const scrollToTop = useScrollToTop();

  return (
    <header className="flex justify-between items-end">
      <Logo onClick={() => scrollToTop()} />
      <nav className="flex items-center gap-2.5">
        <ul className="flex items-center gap-2">
          {LINKS.map((link) => (
            <li key={link.label}>
              <span
                onClick={() => navigateTo(link.path, link.external)}
                className="relative block w-fit leading-[1.2rem] rounded-lg p-0 text-base text-primary/90 whitespace-nowrap sm:px-2 sm:py-1 cursor-pointer"
              >
                {link.label}
              </span>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
};
