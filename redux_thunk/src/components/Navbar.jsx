import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailsSlice";

const Navbar = () => {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.app.users);

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning stickt-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CURD
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" data-bs-theme="dark"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/read">
                  All Post({allUsers.length})
                </Link>
              </li>
            </ul>
            <form role="search" className="ms-auto" style={{ width: "60%" }}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) =>
                  dispatch(searchUser(setSearchData(e.target.value)))
                }
              ></input>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
