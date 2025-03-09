import "../../styles/logo.css";
import PropTypes from "prop-types";
export const Logo = ({ title = "Arman" }) => {
  return <h1 className="logo font-heading text-2xl font-semibold">{title}.</h1>;
};

Logo.propTypes = {
  title: PropTypes.string,
};
