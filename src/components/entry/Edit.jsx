import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editEntry } from '../../slice/appSlice';
import { Modal, Button } from 'react-bootstrap';

const Edit = (props) => {
  const dispatch = useDispatch();
  const [entries, setEntries] = useState({
    startDate: props.item.startDate,
    endDate: props.item.endDate,
    id: props.item.id,
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    e.preventDefault();
    setEntries({ ...entries, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    let updatedEntry = {
      startDate: entries.startDate,
      endDate: entries.endDate,
      id: props.item.id,
    };
    dispatch(editEntry({ id: props.item.id, updatedEntry }));
    handleClose();
    console.log(updatedEntry);
  };

  return (
    <>
      {/* <Button variant="primary" className="userButton" onClick={handleShow}>
        Edit
      </Button> */}

      <i onClick={handleShow} className="fas fa-edit"></i>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="editForm">
            <form onSubmit={handleEdit}>
              <div>
                <label>Start: </label>
                <br />
                <input
                  type="date"
                  name="startDate"
                  value={entries.startDate}
                  onChange={handleChange}
                />

                <label>End: </label>
                <br />
                <input
                  type="date"
                  name="endDate"
                  value={entries.endDate}
                  onChange={handleChange}
                />
              </div>

              <button className="editButton">Save</button>
              <button className="editButton" onClick={handleClose}>
                Close
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Edit;
