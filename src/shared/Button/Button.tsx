import { Link } from 'react-router-dom';
import './Button.css';

type ButtonProps = {
  to?: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ to, label, className = '', onClick }: ButtonProps) => {
  const button = (
    <button className={`action-button ${className}`} onClick={onClick}>
      {label}
    </button>
  );

  return to ? <Link to={to}>{button}</Link> : button;
};
