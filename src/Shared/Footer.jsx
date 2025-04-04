import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import "../Style/Footer.css";
import logo from "../assets/tr-logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main_footer_container">
          
          <div className="footer_logo_container">
            <img src={logo} alt="Logo" />
            <span>ommunionHub</span>
          </div>
          <div className="footer_menu_container">
            <h2>MENU</h2>
            <ul>
              <li>Home</li>
              <li>Event</li>
              <li>About</li>
            </ul>
          </div>
          <div className="footer_contact_container">
            <h2>CONTACT US</h2>
            <ul>
              <li>Bngladesh</li>
              <li>Basisal, Bhola</li>
              <li>+880 17875-92274</li>
            </ul>
          </div>
          <div className="footer_social_contact_container">
            <h2>SOCIAL</h2>
            <ul>
              <li>
              <FaFacebookSquare />
              <FaSquareXTwitter />
              <FaLinkedin />
              </li>
              <li>shsoburhossen951@gmail.com</li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer