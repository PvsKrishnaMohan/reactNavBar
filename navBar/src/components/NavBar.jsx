import React, {useState }from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <h2>Krishna Mohan</h2>
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <a href="/home" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
              <li>
                <a href="/testimonials">Testimonials</a>
              </li>
            </ul>
            <div className="icon" onClick={toggleMenu}>
              <FaBars />
            </div>
          </nav>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="content">
            <h5>Responsive NavBar</h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
