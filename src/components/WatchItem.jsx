import React from "react";
import PropTypes from "prop-types";

const WatchItem = ({ watch, currentUTC, handleDelete }) => {
  return (
    <div className="eight wide column">
      <div className="ui segment">
        <p>
          <b>{watch.city}</b>
        </p>
        <p>{currentUTC.utcOffset(Number(watch.offset)).format("kk:mm:ss")}</p>
        <button onClick={() => handleDelete(watch.id)}>
          <i className="times icon"></i>
        </button>
      </div>
    </div>
  );
};

WatchItem.propTypes = {
  watch: PropTypes.shape({
    city: PropTypes.string.isRequired,
    offset: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
  currentUTC: PropTypes.object,
  handleDelete: PropTypes.func.isRequired
};

export default WatchItem;
