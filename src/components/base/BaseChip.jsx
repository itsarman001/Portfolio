export const BaseChip = ({ children, className = "" }) => {
  return (
    <span
      className={`${className} rounded bg-border-divider text-primary-text text-flat px-2 py-1 text-xs`}
    >
      {children}
    </span>
  );
};
