const useScrollTo = (id) => {
  const scrollToElement = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return scrollToElement;
};

export default useScrollTo;
