import React from "react";

const showLessStyle = {
  textDecoration: "underline",
  color: "white",
};
function ShowLess() {
  return (
    <div>
      <a href="" onClick={showLessHandler} style={showLessStyle}>
        Show Less
      </a>
    </div>
  );
}

function showLessHandler() {
  return "";
}

export default ShowLess;