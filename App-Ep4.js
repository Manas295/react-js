import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/*
  Header
    -Logo
    -Nav Items
  Body
    -Search Bar
    -Restaurant Container
      -Restaurant Card
        -Image
        -Name of restaurant,stars,cuisines,delivery time
  Footer
    -Copyright
    -Links
    -Address
    -Contact

*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
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

//Inline styles
const styleCard = {
  backgroundColor: "lightgray",
};

const RestaurantCard = (props) => {
  console.log(props);
  const { resName, cuisine, starRating, eta, imgSrc } = props; //Destructuring props object
  //props is an object which contains all the attributes passed to the component
  //props.resName, props.cuisine, props.imgSrc
  //props is read only i.e we cannot change the value of props
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={imgSrc}></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{starRating}</h4>
      <h4>{eta}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* Passing props as arguement to component making it dyanmic*/}
        <RestaurantCard
          resName="Meghana Food"
          cuisine="Biryani, North Indian, Asian"
          starRating="4.5⭐"
          eta="30 Mins"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl6HgRVScYa5FcYAoLCdWgngYMZmglM1z7Aw&s"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Burger, Fast Food"
          starRating="4⭐"
          eta="40 Mins"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1IvitoAZ2HtmEjx7fLcJ1ny9cIfAPSatgBA&s"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const createRoot = ReactDOM.createRoot(document.getElementById("root"));
createRoot.render(<AppLayout />);
