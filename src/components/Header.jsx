import React from "react";
import ReactTypingEffect from "react-typing-effect";
const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-info">
          <h2>WEB DEVELOPER AND DESIGNER</h2>
          <ReactTypingEffect
            className="Typed-text"
            text={["Hello.", "World!"]}
            speed={40}
            eraseSpeed={60}
            eraseDelay={1000}
            typingDelay={1000}
          />
        </div>
        <button className="btn-outline-orange">Contact</button>
      </div>
    </>
  );
};

export default Header;
