export const BaseHeading = ({ label, dot, id, className = "" }) => {
  return (
    <h2
      className={`${className} text-base font-medium pb-0.5 .font-unique`}
      id={id}
    >
      {label}
      {dot ? "." : ""}
    </h2>
  );
};
