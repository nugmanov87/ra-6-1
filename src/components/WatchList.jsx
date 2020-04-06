import React from "react";
import PropTypes from "prop-types";
import WatchItem from "./WatchItem";

const WatchList = ({ watches, currentUTC, handleDelete }) => {
  return (
    <div className="ui basic segment">
      <div className="ui grid">
        {watches.map(watch => (
          <WatchItem
            key={watch.id}
            watch={watch}
            currentUTC={currentUTC}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

WatchList.propTypes = {
  watches: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      offset: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  currentUTC: PropTypes.object,
  handleDelete: PropTypes.func.isRequired
};

export default WatchList;
