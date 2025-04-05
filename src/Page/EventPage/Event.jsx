import { useState } from "react";
import "../../Style/Event.css";
import EventCard from "../../Components/EventCard";

const Event = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Religious", "Social", "Charity"];

  const handleCategory = (e) => {
    const categories = e.target.value;
    setActiveCategory(categories);
  };

  return (
    <>
      <section className="main_event_container">
        <div className="event_header_container">
          <h1>Events & Gatherings</h1>
        </div>

        <div className="event_filter_container">
          <h2>Filter by Categorys :</h2>
          <div className="event_filters_btn_container">
            {categories.map((category) => (
              <button
                key={category}
                value={category}
                onClick={handleCategory}
                className={activeCategory === category ? "event_active" : ""}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="main_event_catd_container"><EventCard></EventCard></div>
      </section>
    </>
  );
};

export default Event;
