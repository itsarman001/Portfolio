import { ThemeSwitcher, BrandLogo } from "../index";

const Header = () => {
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
    <header className="flex items-center justify-between px-4 py-3">
      <BrandLogo children="arman" />
      <nav className="flex items-center gap-2">
        <ul className="flex items-center gap-2">
          {NAVIGATION.map((item) => (
            <li className="cursor-pointer" key={item.title}>
              {item.label}
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
