import React, { useEffect, useState } from 'react';
import SingleEntry from './SingleEntry';
import { useSelector } from 'react-redux';
import './entry.scss';
import Form from './Form';

const Entries = () => {
  const state = useSelector((state) => state.reducer.entries);
  let latest = state[state.length - 1].startDate;
  // let butThree = state[state.length - 4].startDate;
  // let butOne = state[3].startDate;

  // let butFour = state[0].startDate;

  function addDaysToDate(firstDate, daysToAdd) {
    const date = new Date(firstDate);
    date.setDate(date.getDate() + daysToAdd);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  //const startDate = new Date(state[4].startDate);
  //const year = startDate.getUTCFullYear();
  const years = [new Set(state.map((item) => item.startDate.slice(0, 4)))];
  const [yearEntries, setYearEntries] = useState(state);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const getAllEntries = () => {
    setYearEntries(state);
  };
  useEffect(() => {
    getAllEntries();
  }, [state]);
  const getFiltered = () => {
    if (start === '' || end === '') {
      getAllEntries();
    } else {
      const filtered = state.filter((item) => {
        const entryDate = new Date(item.startDate);
        const starting = new Date(start);
        const ending = new Date(end);
        return entryDate >= starting && entryDate <= ending;
      });
      setYearEntries(filtered);
    }
  };
  useEffect(() => {
    getFiltered();
  }, [start, end]);
  // function getAverageLength() {
  //   let newLatest = new Date(latest);
  //   let newButThree = new Date(butThree);
  //   let timeDiff = new Date(newLatest) - new Date(newButThree);
  //   let A = newLatest.getUTCMonth();
  //   let B = newButThree.getUTCMonth();
  //   console.log('a', A);
  //   console.log('b', B);
  //   let monthDiff = A - B;
  //   if (monthDiff > 0) {
  //     const aveLength = Math.floor(
  //       timeDiff / (1000 * 60 * 60 * 24 * monthDiff)
  //     );
  //     return aveLength;
  //   } else {
  //     const aveLength = Math.floor(
  //       timeDiff / (1000 * 60 * 60 * 24 * (monthDiff + 12))
  //     );
  //     return aveLength;
  //   }
  // }
  // useEffect(() => {
  //   getAverageLength();
  // }, [state]);

  return (
    <>
      <div className="entriesSection">
        <div className="entriesContainer">
          <div className="statsSection">
            {/* <button>Entry</button> */}
            <button>Statistics</button>
          </div>

          <div className="everythingButHeader">
            <div className="list">
              <div className="filterContainer">
                <form>
                  <label htmlFor="start">From: </label>
                  <input
                    type="date"
                    name="start"
                    id="start"
                    onChange={(e) => setStart(e.target.value)}
                    style={{ width: '116px' }}
                  />
                  <label htmlFor="end">To: </label>
                  <input
                    type="date"
                    name="end"
                    id="end"
                    onChange={(e) => setEnd(e.target.value)}
                    style={{ width: '116px' }}
                  />
                </form>
                <button onClick={getAllEntries}>
                  <i className="fas fa-refresh"></i>
                  <i className="fas fa-sync"></i>
                </button>
              </div>
              <div className="startContainer">
                <h1 className="startText">Your period should start on</h1>
                {/* <h1 className="startDate">{addDaysToDate(latest, 28)}</h1> */}
                <h1 className="startDate">{addDaysToDate(latest, 28)}</h1>
              </div>
              {yearEntries.map((item) => {
                return <SingleEntry key={item.id} item={item} />;
              })}
              <Form />
            </div>
            <div className="stats">
              {/* <div className="statsContainer">
                <p>Last period start date: {latest}</p>
                <p>Average cycle length: {getAverageLength()}</p>
                <p>Average period duration: </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entries;
