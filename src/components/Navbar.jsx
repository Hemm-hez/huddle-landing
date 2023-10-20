import "../styles/Navbar.css";
import logo from "../assets/logo.svg";
import mockup from '../assets/illustration-mockups.svg'
import bgimage from'../assets/bg-hero-desktop.svg'


const Navbar = () => {
  return (
    <div className="bgimage" style={{backgroundImage:`url(${bgimage})`}}>
      <div className="navbar">
        <div>
          <img className="navimage" src={logo} alt="icon" />
        </div>
        <div>
          <button className="buttn">Try it free</button>
        </div>
      </div>
      
      <div className="row section">
        <div className="col-md-4 textall">
          <h3>Build The Community <br /> Your Fans Will Love</h3>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="butin">Get Started For Free</button>
        </div>
        <div className="col-md-6">
            <img className="mockup" src={mockup} alt="mockup" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
