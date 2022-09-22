import React from "react";

// components
import PreviousWork from "../PreviousWorkTile";

// data
import previousWorks from "../../data/previous-works.json";

const previousWorkStyle = {
  textAlign: "center",
  backgroundColor: "black",
};
const contentStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "0",
  marginLeft: "5vw",
  marginRight: "5vw",
  color: "white",
};

export default function PreviousWorkSection() {
  return (
    <div id="previous-works" className="page-section" style={previousWorkStyle}>
      <h2 className="page-section-header" style={{ color: "white" }}>
        Previous Work
      </h2>
      <div style={contentStyle}>
        {previousWorks.map((previousWork, index) => {
          return (
            <PreviousWork.Wrapper key={index}>
              <PreviousWork.Title>{previousWork.name}</PreviousWork.Title>
              <PreviousWork.Display src="" />
              <PreviousWork.TechUsed tech={previousWork["tech-used"]} />
              <PreviousWork.Description>
                {previousWork.description}
              </PreviousWork.Description>
            </PreviousWork.Wrapper>
          );
        })}
      </div>
    </div>
  );
}
