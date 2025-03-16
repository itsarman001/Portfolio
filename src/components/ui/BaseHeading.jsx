export const BaseHeading = ({ label, dot, className = "" }) => {
  return (
    <h2 className={`${className} text-base font-medium pb-0.5 font-heading`}>
      {label}
      {dot ? "." : ""}
    </h2>
  );
};
