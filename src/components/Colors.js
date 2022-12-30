import Button from "react-bootstrap/Button";
import React, { useState } from "react";
function TypesExample() {
  const [state, setstate] = useState([
    { color: "#4e73df", text: "Primary" },
    { color: "#1cc88a", text: "Success" },
    { color: "#36b9cc", text: "Info" },
    { color: "#f6c23e", text: "Warning" },
    { color: "#e74a3b", text: "Danger" },
    { color: "#858796", text: "Secondary" },
    { color: "#f8f9fc", text: "Light" },
    { color: "#5a5c69", text: "Dark" },
  ]);

  return (
    <div className="container-class">
      <div className="mains">
        {state.map((data) => {
          return (
            <div className="color-container">
              <span
                className="colors_style"
                style={({ color: data.color }, { backgroundColor: data.color })}
              >
                {data.text}
                <br></br>
                <span> {data.color}</span>
              </span>
            </div>
          );
        })}
      </div>
      <div className="devolopment-style">
        <h2>Devolopment Approach</h2>
        <h6>
          SB Admin makes extensive use of Boostrap 4 utility classes in order to
          reduce CSS bloat and poor page performence . Custom CSS classes are
          used to create custom components and custom utility classes.<br></br>
          <br></br>
          <br></br>
          <span>
            Before working with this theme you should become familiar with the
            Boostrap framework , especially the utility classes.
          </span>
        </h6>
      </div>
    </div>
  );
}

export default TypesExample;
