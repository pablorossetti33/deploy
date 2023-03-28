import React, { useEffect } from "react";
import { filterByActivities,  getActivities } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function FiltroActivities({ currentPage, setCurrentPage }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const activity = useSelector((state) => state.activities);

  function handleFilter(e) {
    const value = e.target.value;
    setCurrentPage(1);
    dispatch(filterByActivities(value));
  }

  return (
    <div>
      <select onChange={handleFilter}>
        <option selected disabled>
          Select one
        </option>
        <option value="All">All Activities</option>
        {
          activity.map((t, i) => {
            return (
              <option value={t.name} key={i}>
                {t.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default FiltroActivities;
