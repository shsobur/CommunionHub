import "../Style/EventCaed.css";
import { GoArrowRight } from "react-icons/go";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";

const EventCard = ({ event }) => {
  const { image, title, date, location, description } = event;

  return (
    <>
      <section className="event_card_top_container">
        <div>
          <img src={image} alt="Image" />
        </div>

        <div className="event_card_title_container">
          <h2>{title.length < 10 
            ? `${title}` : `${title.slice(0, 20)}...`
          }</h2>
          <h3>
            {description.lenght < 50
              ? `${description}`
              : `${description.slice(0, 50)}...`}
          </h3>
        </div>

        <div className="event_card_post_info_container">
          <ul>
            <li>
              <CiCalendarDate />
              {date}
            </li>
            <li>
              <CiLocationOn />
              {location}
            </li>
          </ul>
        </div>

        <button>
          Read More <GoArrowRight />
        </button>
      </section>
    </>
  );
};

export default EventCard;
