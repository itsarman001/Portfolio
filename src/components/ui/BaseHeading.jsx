export const BaseHeading = ({ label, dot, className = "" }) => {
  return (
    <h2
      className={`${className} text-base font-medium pb-0.5 font-.font-unique
`}
    >
      {label}
      {dot ? "." : ""}
    </h2>
  );
};
