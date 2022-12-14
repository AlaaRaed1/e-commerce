import { useEffect } from "react";
import avatar from "../images/imgAvatar.png";
export default function Contact() {
  useEffect(() => {
    localStorage.setItem("product", "null");
  });
  return (
    <div>
      <div
        className="card shadow-sm p-1 pb-3 mt-4 bg-white rounded contact"
        style={{ width: "20em" }}
      >
        <img
          src={avatar}
          alt=""
          style={{ height: "12em", objectFit: "cover" }}
        />
        <p>Please fill your info and send us what is on your mind.</p>
        <form className="form d-flex flex-column gap-2">
          <div>
            <label forhtml="name">Name: </label>
            <input
              type="name"
              placeholder="Your name"
              name="name"
              className="form-control form-control-sm"
            />
          </div>
          <div>
            <label forhtml="email">Email: </label>
            <input
              type="email"
              placeholder="@example.com"
              name="email"
              className="form-control form-control-sm"
            />
          </div>
          <div>
            <label forhtml="message">Message:</label>
            <textarea
              placeholder="message"
              name="message"
              className="form-control form-control-sm"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
