import Swal from "sweetalert2";
import useAxios from "../Hook/useAxios";
import "../Style/NewEvent.css";

const NewEvent = () => {
  const axiosPublic = useAxios();

  const handleNewEventData = (e) => {
    e.preventDefault();

    const form = e.target;

    const image = form.image.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;

    const newEventData = {
      image,
      title,
      description,
      category,
    };

    axiosPublic.post("/new-event", newEventData).then((res) => {
      if (res.acknowledged) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Event added successfully",
        });
      }
    });
  };

  return (
    <>
      <div className="new_event_top_container">
        <h1 className="new_event_title">Add New Event</h1>

        <div className="main_new_event_from_container">
          <form onSubmit={handleNewEventData}>
            <div className="new_event_form_imput_container">
              <p>Image URL</p>
              <input
                name="image"
                type="text"
                placeholder="Image URL (Optional)"
              />
            </div>

            <div className="new_event_form_imput_container">
              <p>Title</p>
              <input name="title" type="text" placeholder="Add Title" />
            </div>

            <div className="new_event_form_imput_container">
              <p>Title</p>
              <input
                name="description"
                type="text"
                placeholder="Add Description"
              />
            </div>

            <div className="new_event_form_imput_container">
              <select name="category">
                <option value="Religious">Religious</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
              </select>
            </div>

            <div className="submit_btn_container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewEvent;
