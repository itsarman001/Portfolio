import { ThemeSwitcher, BaseLogo } from "../index";

export const Header = () => {
  const NAVIGATION = [
    {
      title: "experience",
      label: "Experience",
      path: "/experience-header",
    },
    {
      title: "work",
      label: "Work",
      path: "/work-header",
    },
  ];

  const handleScroll = (event, path) => {
    event.preventDefault();
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex items-center justify-between py-3">
      <BaseLogo>arman.</BaseLogo>
      <nav aria-label="Main Navigation" className="flex items-center gap-2">
        <ul className="flex items-center gap-3 me-1.5">
          {NAVIGATION.map((item) => (
            <li key={item.title}>
              <a
                href={item.path}
                onClick={(e) => handleScroll(e, item.path)}
                className="cursor-pointer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};
