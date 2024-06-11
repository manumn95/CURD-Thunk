import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <>
      <form className="w-50 mx-auto my-4" onSubmit={handleSubmit}>
        <div className="container text-center border">
          <h1 className="mt-3">Fill the form</h1>
          <div className="mb-3 mt-5">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="userName"
              placeholder="Your Name"
              onChange={getUserData}
            ></input>
          </div>
          <div className="mb-3 mt-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={getUserData}
            ></input>
          </div>
          <div className="mb-3 mt-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Age
            </label>
            <input
              type="Number"
              name="age"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Age"
              onChange={getUserData}
            ></input>
          </div>
          <p>Gender</p>
          <div className="d-flex justify-content-center gap-5">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                id="flexRadioDefault1"
                onChange={getUserData}
              ></input>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                id="flexRadioDefault1"
                onChange={getUserData}
              ></input>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Female
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-info mt-3 mb-2">
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default CreatePost;
