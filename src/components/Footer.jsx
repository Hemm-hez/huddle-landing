import "../styles/Footer.css";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <>
    <div className="forbackground">
      <div className="footer">
        <p className="ready">Ready To Build Your Community?</p>
        <button className="butn">Get Started For Free</button>
      </div>
      <div className="foot">
        <div className="footimage">
          <img className="logo" src={logo} alt="logo" />
         <div className="iconduo">
          <div className="icontext">
          <i class="fa-solid fa-location-dot"></i>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          </div>
         
         <div> <i class="fa-solid fa-phone-volume"></i>
          <a href="#">+1-543-123-4567</a></div>
          <div className="envelope">
          <i class="fa-solid fa-envelope"></i>
          <a href="#">example@huddle.com </a>
          </div>
         </div>
        </div>
        <div className="anchor">
            <a href="#">About Us</a>
            <a href="#">What We Do</a>
            <a href="#">FAQ</a>
        </div>
        <div className="anctag">
            <a href="#">Career </a>
            <a href="#">Blog</a>
           <a href="#">Contact Us</a>
        </div>
        <div className="icon">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
      </div>
      </>
  );
};

export default Footer;
