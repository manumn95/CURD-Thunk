import { useSelector } from "react-redux";
import "./Modal.css";
const Modal = ({ id, showPopUp, setShow }) => {
  const allusers = useSelector((state) => state.app.users);
  const singleuser = allusers.filter((ele) => ele.id === id);

  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <h1>{singleuser[0].name}</h1>
          <p>{singleuser[0].email}</p>
          <p>{singleuser[0].age}</p>
          <p>{singleuser[0].gender}</p>
          <button className="btn btn-danger" onClick={() => setShow(false)}>
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
