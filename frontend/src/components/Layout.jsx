import React from "react";
import Routes from "./Routes";
import Sidebar from "./Sidebar";
function Layout(props) {
  console.log(props);
  return (
    <div>
      <div style={{ display: "flex" }}>
        {props.location.pathname !== "/" &&
          props.location.pathname !== "/signup" &&
          props.location.pathname !== "/login" && (
            <Sidebar history={props.history} defaultActive="1" />
          )}
        <div className="w-100">{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
