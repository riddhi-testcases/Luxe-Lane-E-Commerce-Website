import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'text-xl';
      case 'large':
        return 'text-4xl';
      default:
        return 'text-2xl';
    }
  };

  const getSubheadingClass = () => {
    switch (size) {
      case 'small':
        return 'text-[10px]';
      case 'large':
        return 'text-sm';
      default:
        return 'text-xs';
    }
  };

  return (
    <Link to="/" className="flex items-center gap-2 transition-all duration-300 hover:opacity-80">
      <ShoppingBag className={`text-primary dark:text-primary-light ${size === 'small' ? 'h-5 w-5' : size === 'large' ? 'h-8 w-8' : 'h-6 w-6'}`} />
      <div>
        <h1 className={`${getSizeClass()} tracking-tight`}>
          <span className="font-serif font-bold text-primary dark:text-primary-light">LUXE</span>
          <span className="font-serif font-normal text-primary dark:text-primary-light"> Lane</span>
        </h1>
        <p className={`${getSubheadingClass()} font-sans tracking-wide text-muted dark:text-muted-light text-center`}>
          by Riddhi
        </p>
      </div>
    </Link>
  );
};

export default Logo;