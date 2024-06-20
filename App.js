import React from "react";
import ReactDOM from "react-dom/client";

/**
 *  HEADER
 *   - Logo
 *   - Nav items
 *  BOBY
 *   - Search
 *   - RestaurentContainer
 *     - RestaurentCard
 *  FOOTER
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ui>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ui>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div clasaName="search-container"></div>
      <div className="res-container"></div>
    </div>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
