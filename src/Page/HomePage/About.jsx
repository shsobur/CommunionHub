import { MdArrowRightAlt } from "react-icons/md";
import "../../Style/About.css";
import aboutImage from "../../assets/About.png";

const About = () => {
  return (
    <>
      <div className="about_main_inner_container">
        <div className="about_left_side_container">
          <img src={aboutImage} alt="Image" />
        </div>
        <div className="about_right_side_container">
          <p>ABOUT COMMUNIONHUB</p>
          <h1>
            Builders of bespoke <br /> professional communities.
          </h1>
          <h2>
            We partner with, and are trusted by, the most demanding and
            discerning business networks in the world. We provide a digital
            business model, tools, and access to trusted peers, mentors and
            other meaningful relationships that elevate a member experience into
            time well spent.
          </h2>
          <button>
            More About Us <MdArrowRightAlt />
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
