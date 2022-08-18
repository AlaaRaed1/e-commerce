import React from "react";
import avatar from "../images/img_avatar1.png";
export default function Contact() {
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
        <form className="form">
          <div>
            <label forHtml="name">Name: </label>
            <input
              type="name"
              placeholder="Your name"
              name="name"
              class="form-control form-control-sm"
            />
          </div>
          <div>
            <label forHtml="email">Email: </label>
            <input
              type="email"
              placeholder="@example.com"
              name="email"
              class="form-control form-control-sm"
            />
          </div>
          <div>
            <label forHtml="message">Message:</label>
            <textarea
              placeholder="message"
              name="message"
              class="form-control form-control-sm"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
