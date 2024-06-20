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
 *        -Img
 *        -Name of Res, Star Rating, cuisine, delery tie
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
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = () => {
  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qesudtagxezda24kufwt"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 Stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div clasaName="search">Search</div>
      <div className="res-container">
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
      </div>
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
