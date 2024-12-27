import React, { useState } from 'react';
import servicesData from '../data/servicesData.js'; // Import the services data

function Header() {
  const [isServicesHovered, setIsServicesHovered] = useState(false); // State for hover on "Services"

  return (
    <header className="App-header">
      <div>logo</div>
      <nav>
        <ul className="main-menu">
          <li
            className="menu-item"
            onMouseOver={() => setIsServicesHovered(true)}
            onMouseOut={() => setIsServicesHovered(false)}
          >
            <a href="/services">Services</a>
            {isServicesHovered && (
              <ul className="submenu">
                {servicesData.map((service) => (
                  <li key={service.title} className="submenu-item">
                    <a href={service.path}>{service.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="menu-item">
            <a href="/partners">Partners</a>
          </li>
          <li className="menu-item">
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

