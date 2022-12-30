import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PendingIcon from "@mui/icons-material/Pending";
import Slider from "@mui/material/Slider";

const Dashboard = () => {
  const data = [
    {
      earning: "EARNING(MONTHLY)",
      price: "$40,000",
      icon: <InventoryIcon />,
    },
    {
      earning: "EARNING(YEARLY)",
      price: "$215,000",
      icon: <AttachMoneyIcon />,
    },
    {
      earning: "TASK",
      price: (
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      ),
      ic: "50%",
      icon: <AssignmentIcon />,
    },
    {
      earning: "PENDING REQUEST ",
      price: "17",
      icon: <PendingIcon />,
    },
  ];
  console.log(data);
  return (
    <div className="dash_table">
      {data.map((data) => {
        return (
          <div>
            <div className="dash">
              <div className="tables">
                <div>{data.earning}</div>
                <h3>{data.price}</h3>
                <span>{data.ic}</span>
              </div>
              <h4>{data.icon}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
