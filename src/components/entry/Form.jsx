import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';
import { addEntry, editEntry } from '../../slice/appSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      startDate: state.startDate,
      endDate: state.endDate,
      id: uuid(),
    };
    dispatch(addEntry(newEntry));
    console.log(newEntry);

    setState({
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className="addSection">
      <form className="addContainer" onSubmit={handleSubmit}>
        <fieldset>
          <label>Start Date:</label>
          <input
            //className="actual"
            type="date"
            name="startDate"
            value={state.startDate}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label>End Date:</label>
          <input
            //className="next"
            type="date"
            name="endDate"
            value={state.endDate}
            onChange={handleChange}
          ></input>
        </fieldset>
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
