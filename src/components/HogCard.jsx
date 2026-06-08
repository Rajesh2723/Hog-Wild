import React from "react";
import { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] =
    useState(false);

  const imageUrl =
    hog.image ||
    `../hog-imgs/${hog.name
      .toLowerCase()
      .replaceAll(" ", "_")}.jpg`;

  return (
    <div
      aria-label="hog card"
      className="ui card"
      onClick={() =>
        setShowDetails(!showDetails)
      }
    >
      <div className="image">
        <img
          src={imageUrl}
          alt={hog.name}
        />
      </div>

      <div className="content">
        <h3>{hog.name}</h3>

        {showDetails && (
          <>
            <p>
              Specialty: {hog.specialty}
            </p>

            <p>
              Weight: {hog.weight}
            </p>

            <p>
              Greased:
              {hog.greased
                ? " Yes"
                : " No"}
            </p>

            <p>
              Medal:
              {hog.highestMedalAchieved}
            </p>
          </>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onHide(hog.name);
          }}
        >
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;