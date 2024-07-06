import React from "react";
import "./Admin.scss";
import create from "../../assets/icon/create.svg";
import edit from "../../assets/icon/menej.svg";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import leftadmin from "../../assets/icon/arrowleft.svg";
import logout from "../../assets/icon/logout.svg";
function Admin() {
  let { pathname } = useLocation();
  let navigate = useNavigate();
  return (
    <div>
      <div className="admin">
        <div className="admin1">
          <NavLink to={"/admin"}>
            <img src={leftadmin} alt="" />
          </NavLink>
          <h1>Admin Dashboard</h1>
        </div>
        <NavLink to={"createproduct"} className="admin2">
          <img src={create} alt="" />
          <p>Create product</p>
        </NavLink>
        <NavLink to={"manageproduct"} className="admin2">
          <img src={edit} alt="" />
          <p>Manage product</p>
        </NavLink>
        <NavLink to={"createcategory"} className="admin2">
          <img src={create} alt="" />
          <p>Create category</p>
        </NavLink>
        <NavLink to={"managecategory"} className="admin2">
          <img src={edit} alt="" />
          <p>Manage category</p>
        </NavLink>
        <div
          onClick={() => {
            localStorage.removeItem("x-auth-token");
            navigate("/login");
          }}
          className="admin3"
        >
          <img src={logout} alt="" />
          <p>Log out</p>
        </div>
      </div>
      {/* {pathname === "/admin" ? (
        <img
          style={{ marginLeft: "800px", marginTop: "300px" }}
          src={welcome}
          alt=""
        />
      ) : (
        <></>
      )} */}
      <Outlet />
    </div>
  );
}

export default Admin;
