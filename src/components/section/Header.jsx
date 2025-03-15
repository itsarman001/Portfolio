import { ThemeSwitcher, BaseLogo } from "../index";

export const Header = () => {
  const NAVIGATION = [
    {
      title: "experience",
      label: "Experience",
      path: "/experience",
    },
    {
      title: "work",
      label: "Work",
      path: "/work",
    },
  ];

  return (
    <header className="flex items-center justify-between py-3">
      <BaseLogo>arman.</BaseLogo>
      <nav aria-label="Main Navigation" className="flex items-center gap-2">
        <ul className="flex items-center gap-2">
          {NAVIGATION.map((item) => (
            <li key={item.title}>
              <a href={item.path} className="cursor-pointer">
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
