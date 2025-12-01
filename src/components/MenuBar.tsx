import { useEffect, useState } from 'react';
import yaml from 'js-yaml';
import './MenuBar.css';

const MenuBar = () => {
  const [navItems, setNavItems] = useState<{ href: string; label: string }[]>([]);

  useEffect(() => {
    fetch('/headerValues.yaml')
      .then(res => res.text())
      .then(text => {
        const data = yaml.load(text) as { navItems?: { href: string; label: string }[] };
        setNavItems(data.navItems || []);
      });
  }, []);

  return (
    <nav className="menu-bar">
      <ul>
        {navItems.map((item) => (
          <li key={item.href}><a href={item.href}>{item.label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
export default MenuBar;