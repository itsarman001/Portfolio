import useScrollTo from "../../hooks/useScrollTo";

export const Footer = () => {
  return (
    <footer className="my-2">
      <button
        className="mx-auto my-5 py-3 block w-2/6 text-center"
        onClick={useScrollTo}
      >
        Scroll To Top
      </button>

      <p className="text-base text-center">Made with ❤️ by @itsarman001</p>
    </footer>
  );
};
