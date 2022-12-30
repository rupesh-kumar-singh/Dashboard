import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ProgressBar from "react-bootstrap/ProgressBar";
const Project = () => {
  const now = 60;
  return (
    <div className="project">
      <div className="child">
        <h2>Projects</h2>
        <div>
          <h5>
            Server Migration<h3>40%</h3>
          </h5>
          <ProgressBar variant="success" now={40} />
        </div>
        <div>
          <h5>
            Sales Tracking<h3>20%</h3>
          </h5>
          <ProgressBar variant="info" now={20} />
        </div>

        <div>
          <h5>
            Customer Databases<h3>60%</h3>
          </h5>
          <ProgressBar variant="warning" now={60} />
        </div>
        <div>
          <h5>
            Payments Details<h3>80%</h3>
          </h5>
          <ProgressBar variant="danger" now={80} />
        </div>
        <div>
          <h5>
            {" "}
            Account Setup<h3>40%</h3>
          </h5>
          <ProgressBar variant="info" now={40} />
        </div>
      </div>
      <div className="child">
        <img src="https://unidad22.com/wp-content/uploads/2014/10/responsive-website-design.jpg" />
        <h6>
          Add some quality , svg illustrations to your counttesy of unDraw , a
          contantly updated countery of unDraw , a constantely updated
          coleection of beautiful svg images that you can completely free and
          without attribution{" "}
        </h6>
        <a href="#">
          Brouser Illustrations on unDraw
          <ArrowRightAltIcon />{" "}
        </a>
      </div>
    </div>
  );
};

export default Project;
