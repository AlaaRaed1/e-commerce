import React from "react";

export default function MenClothing(props) {
  const { item } = props;
  return (
    <div className="col">
      <div className="card" style={{ maxWidth: "70%", maxHeight: "70%" }}>
        <img
          className="card-img-top"
          src={item.image}
          alt="Card"
          style={{
            height: "20%",
            objectFit: "contain",
            borderBottom: "1px solid rgba(0, 0, 0, .1)",
            paddingBottom: ".5em",
          }}
        />
        <div className="card-body men-container">
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text men-description">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
