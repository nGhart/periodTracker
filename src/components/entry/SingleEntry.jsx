import React from 'react';
import { useDispatch } from 'react-redux';
import Edit from './Edit';

const SingleEntry = (props) => {
  const dispatch = useDispatch();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const startDate = new Date(props.item.startDate);
  const month = months[startDate.getMonth()];
  return (
    <div className="singleSection">
      <div className="singleContainer">
        <span className="month">{month}</span>
        <span className="actual">{props.item.startDate}</span>
        <span className="next">{props.item.endDate}</span>
        <span>
          <Edit item={props.item} editEntry={props.editEntry} />
        </span>
      </div>
    </div>
  );
};

export default SingleEntry;
