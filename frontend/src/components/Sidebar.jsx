import React, { useState } from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";

import { GiBookmark } from "react-icons/gi";
import { Link } from "react-router-dom";
const SidebarParent = styled.div`
  background: #565f56;
  width: 4.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-shadow: 5px 0px 4px 0px #00000040;
`;
const SidebarHeader = styled.div`
  display: block;
  padding: 1rem;
  background: #474747;
  a {
    color: #212529;
    text-decoration: none !important;
    align-items: center !important;
  }
`;
const SidebarItem = styled.div`
  padding: 16px 24px;
  align-content: center;
  transition: all 0.25s ease-in-out;
  //Change the background color if 'active' prop is received
  background: ${(props) => (props.active ? "#474747" : "")};
  margin: 60px 0px;
  border-radius: 21px;

  span {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover {
    background: #474747;
  }
`;

function Sidebar(props, { defaultActive }) {
  //Those location props finally come in handy!
  const location = props.history.location;
  //Load this string from localStorage
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  //Parse it to a number
  const lastActiveIndex = Number(lastActiveIndexString);
  //Store it in state
  const [activeIndex, setActiveIndex] = useState(
    lastActiveIndex || Number(defaultActive)
  );
  //This sets the item to localStorage and changes the state index
  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }

  //Appends '/' to the start of a string if not present
  function getPath(path) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  //This re-renders when the route changes
  useEffect(() => {
    //Get an item with the same 'route' as the one provided by react router (the current route)
    const activeItem = SidebarItems.findIndex(
      (item) => getPath(item.route) === getPath(location.pathname)
    );
    changeActiveIndex(activeItem);
  }, [location]);

  return (
    <>
      <SidebarParent>
        <SidebarHeader>
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width="24"
            height="24"
            className="rounded-circle"
          />
        </SidebarHeader>
        {SidebarItems.map((item, index) => {
          return (
            <Link to={item.route} key={index}>
              <SidebarItem key={item.name} active={index === activeIndex}>
                <span>{item.icon}</span>
              </SidebarItem>
            </Link>
          );
        })}
      </SidebarParent>
    </>
  );
}

export default Sidebar;
