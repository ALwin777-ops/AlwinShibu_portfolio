import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links, onLinkClick }) => {
  return (
    <ul className="flex flex-col py-4 items-center space-y-4">
      {links.map((link, index) => (
        <li key={index} onClick={onLinkClick}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
