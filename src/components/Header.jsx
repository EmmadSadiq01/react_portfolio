import {React, useState} from "react";
import ReactTypingEffect from "react-typing-effect";
const Header = () => {
  const [opacity, setOpacity] = useState(false);
  const changeBackground = () =>{
    if(window.scrollY >= 400){
      setOpacity(true)
    }
    else{
      setOpacity(false)
    }
}
    window.addEventListener('scroll',changeBackground)
  return (
    <>
      <div className="header-wrapper">
        <div className="header-info"  style={{opacity:(opacity)?0:1}}>
          <h2>WEB DEVELOPER AND DESIGNER</h2>
          <ReactTypingEffect
            className="Typed-text"
            text={["Web Developer", "React Developer", "PSD to HTML"]}
            speed={40}
            eraseSpeed={60}
            eraseDelay={1000}
            typingDelay={1000}
          />
        <button className="btn-outline-orange">Contact</button>
        </div>
      </div>
    </>
  );
};

export default Header;
