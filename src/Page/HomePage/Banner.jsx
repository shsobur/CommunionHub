import "../../Style/Banner.css";
import bannerImage from "../../assets/banner.png";
import About from "./About";

const Banner = () => {
  return (
    <>
      <section className="main_banner_container">
        <div
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500"
          className="banner_left_side_container"
        >
          <div className="banner_left_content">
            <p>VISIBILITY . CONNECTIONS . GROWTH</p>
            <h1>
              CommunionHub Where Connections <br /> <span>Thrive</span>.
            </h1>
            <h2>
              Building Stronger and More Meaningful Communities, <br /> One
              Connection at a Time.
            </h2>
            <button>Let's go to Event</button>
          </div>
        </div>
        <div className="banner_right_side_container">
          <img src={bannerImage} alt="Image" />
        </div>
      </section>

      <section className="main_about_container">
        <About></About>
      </section>
    </>
  );
};

export default Banner;
