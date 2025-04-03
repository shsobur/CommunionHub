import "../../Style/Banner.css";
import bannerImage from "../../assets/banner.png";

const Banner = () => {
  return (
    <>
      <section className="main_banner_container">
        <div className="banner_left_side_container">
          <div className="banner_left_content">
            <p>VISIBILITY . CONNECTIONS . GROWTH</p>
            <h1>
              CommunionHub Where <br /> Connections <br /> <span>Thrive</span>.
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
    </>
  );
};

export default Banner;
