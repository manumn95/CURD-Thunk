import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailsSlice";

const Update = () => {

  const [updatesData, setUpdatedData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const { id } = useParams();
  const { users } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id && users.length > 0) {
     
      const singleUser = users.find((ele) => ele.id === id);
      if (singleUser) {
        setUpdatedData(singleUser);
      }
    }
  }, [id, users]);

  const newData = (e) => {
    setUpdatedData({ ...updatesData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updatesData));
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
              value={updatesData.name}
              onChange={newData}
            />
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
              value={updatesData.email}
              onChange={newData}
            />
          </div>
          <div className="mb-3 mt-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Age
            </label>
            <input
              type="number"
              name="age"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Age"
              value={updatesData.age}
              onChange={newData}
            />
          </div>
          <p>Gender</p>
          <div className="d-flex justify-content-center gap-5">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                checked={updatesData.gender === "male"}
                onChange={newData}
              />
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
                checked={updatesData.gender === "female"}
                onChange={newData}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Female
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-info mt-3 mb-2">
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default Update;
