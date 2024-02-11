"use client";

import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ clickMethod }) => {
  const handleClick = () => {
    switch (clickMethod) {
      case "open-form":
        handleOpenForm();
        break;
      case "submit-mission":
        handleSubmitMission();
        break;
      default:
        break;
    }
  };

  const handleOpenForm = () => {
    document.getElementById("form-pop-up").showModal();
  };

  const handleSubmitMission = () => {
    const form = document.getElementById("form-submit");
    if (form) {
      form.submit();
    }
  };

  return (
    <button
      className="text-red-500 text-sm font-semibold px-4 py-2 border border-red-500 rounded-md flex items-center justify-center gap-2 mt-4"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faUserNinja} className="text-lg" />
      Kirim Debt Collector
    </button>
  );
};
