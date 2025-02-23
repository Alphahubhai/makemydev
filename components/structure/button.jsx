import React from 'react';
import Link from 'next/link';
import styles from '../../styles/structure/button.module.scss';

const Button = ({ 
  children, 
  href, 
  className = '', 
  onClick,
  target = '_self',
  rel,
  type = 'button',
  leaveSite = false 
}) => {
  const combinedClassName = `${styles.button} ${className}`;

  if (href) {
    // If it's an external link or leaveSite is true
    if (href.startsWith('http') || leaveSite) {
      return (
        <a 
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    
    // Internal link using Next.js Link
    return (
      <Link 
        href={href} 
        className={combinedClassName}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button 
      type={type}
      className={combinedClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 