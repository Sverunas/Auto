import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaPlus,
  FaCog,
  FaInfoCircle,
  FaMinus,
  FaHome
  
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [

    {
      path: "/",
      name: "Pradinis",
      icon: <FaHome style={{ color: "red" }} />,
    },
     {
      path: "/workers",
      name: "Pridėti meistrą",
      icon: <FaThList style={{ color: "yellow" }} />,
    },
    {
      path: "/services",
      name: "Pridėti servisą",
      icon: <FaPlus style={{ color: "#44ff00" }} />,
    },

  ];
  return (
    <div className="container">
      <div style={{ width: "250px" }} className="sidebar">
        <br />
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
