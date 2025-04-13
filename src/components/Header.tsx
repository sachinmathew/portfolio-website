import React, { useEffect, useState } from 'react';
import yaml from 'js-yaml';
import './header.css';

const Header: React.FC = () => {
  const [navItems, setNavItems] = useState<{ href: string; label: string }[]>([]);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await fetch('/headerValues.yaml');
        const text = await response.text();
        const data = yaml.load(text) as { navItems: { href: string; label: string }[] };
        setNavItems(data.navItems);
      } catch (e) {
        console.error('Error fetching nav items:', e);
      }
    };

    fetchNavItems();
  }, []);

  return (
    <header className="header">
      <h1 className="title">Sachin Mathew | Senior DevOps Engineer</h1>
      <nav>
        <ul className="navList">
          {navItems.map((item, index) => (
            <li key={index} className="navItem">
              <a href={item.href} className="navLink">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;