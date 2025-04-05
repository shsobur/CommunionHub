import "../../Style/Event.css";
import useAxios from "../../Hook/useAxios";
import { useEffect, useState } from "react";
import EventCard from "../../Components/EventCard";
import Loading from "../../Components/Loading";

const Event = () => {
  const axiosPublic = useAxios();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(events);
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Religious", "Social", "Charity"];

  useEffect(() => {
    axiosPublic.get("/events").then((res) => {
      setLoading(true);
      setEvents(res.data);
      setLoading(false);
    });
  }, [axiosPublic]);

  const handleCategory = (e) => {
    const categories = e.target.value;
    setActiveCategory(categories);

    if(categories === "All") {
      axiosPublic.get("/events").then((res) => {
        setLoading(true);
        setEvents(res.data);
        setLoading(false);
      });
    }

    axiosPublic.get(`/event?category=${categories}`).then((res) => {
      setLoading(true);
      setEvents(res.data);
      setLoading(false);
    });
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

        <div className="main_event_card_container">
          {
            loading ? <div className="w-full text-2xl text-center font-bold mt-10 max-w-[1536px] m-auto ">Loading...</div> :
            events.map(event => <EventCard key={event._id} event={event}></EventCard>)
          }
        </div>
      </section>
    </>
  );
};

export default Event;
