import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailsSlice";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [showPopUp, setShow] = useState(false);
  const [radioData,setRadioData] = useState('');
  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2 className="text-center">Loading.....</h2>;
  }

  return (
    <>
      {showPopUp && (
        <Modal id={id} showPopUp={showPopUp} setShow={setShow}></Modal>
      )}

      <h2 className="text-center mt-5">All data</h2>
      <div className="d-flex justify-content-center gap-5 mb-3 mt-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="all"
            id="flexRadioDefault1"
            checked={radioData === ''}
            onChange={()=>setRadioData('')}
          ></input>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            All
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            id="flexRadioDefault1"
            checked={radioData === 'female'}
            onChange={(e)=>setRadioData(e.target.value)}
          ></input>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Female
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={radioData === 'male'}
            onChange={(e)=>setRadioData(e.target.value)}
          ></input>
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
      </div>
      <div className="container">
        {users &&
          users
            .filter((ele) => {
              if (!searchData) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            }).filter((ele)=>{
              if(radioData === 'male')
                {
                  return ele.gender === radioData;
                }
                else if(radioData === 'female')
                  {
                    return ele.gender === radioData;
                  }
                  else{
                    return ele;
                  }
            })
            .map((data) => {
              return (
                <div key={data.id} className="card mb-3">
                  <div className="card-body text-center">
                    <h5>Name:{data.name}</h5>
                    <p>Email:{data.email}</p>
                    <p>Gender:{data.gender}</p>
                    <div className="d-flex justify-content-center gap-5 mt-3">
                      <button onClick={() => [setId(data.id), setShow(true)]}>
                        View
                      </button>
                      <Link to={`/edit/${data.id}`}>Edit</Link>
                      <Link onClick={() => dispatch(deleteUser(data.id))}>
                        Del
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default Read;
