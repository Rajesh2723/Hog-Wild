import { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] =
    useState({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      highestMedalAchieved: "",
      image: "",
    });

  const handleChange = (e) => {
    const {
      name,
      value,
      checked,
      type,
    } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddHog({
      ...formData,
      weight: Number(formData.weight),
    });

    setFormData({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      highestMedalAchieved: "",
      image: "",
    });
  };

  return (
    <form
      className="ui form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">
        Name
      </label>

      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="specialty">
        Specialty
      </label>

      <input
        id="specialty"
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
      />

      <label htmlFor="weight">
        Weight
      </label>

      <input
        id="weight"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
      />

      <label htmlFor="greased">
        Greased
      </label>

      <input
        id="greased"
        type="checkbox"
        name="greased"
        checked={formData.greased}
        onChange={handleChange}
      />

      <label htmlFor="highestMedalAchieved">
        Medal
      </label>

      <input
        id="highestMedalAchieved"
        name="highestMedalAchieved"
        value={
          formData.highestMedalAchieved
        }
        onChange={handleChange}
      />

      <button type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;