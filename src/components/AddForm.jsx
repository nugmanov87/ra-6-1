import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import WatchModel from "../models/WatchModel";

const AddForm = ({ handleAdd }) => {
  const [form, setForm] = useState({ city: "", offset: "" });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const watch = new WatchModel(form.city, form.offset, shortid.generate());
    handleAdd(watch);
    setForm({ city: "", offset: "" });
  };
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="two fields">
        <div className="field">
          <label htmlFor="city">Название</label>
          <div className="ui input left icon">
            <input
              type="text"
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="distance">Временная зона</label>
          <input
            type="number"
            step={1}
            min={-12}
            max={+14}
            name="offset"
            id="offset"
            value={form.offset}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button className="ui button" type="submit">
        Добавить
      </button>
    </form>
  );
};

AddForm.propTypes = {
  handleAdd: PropTypes.func.isRequired
};

export default AddForm;
