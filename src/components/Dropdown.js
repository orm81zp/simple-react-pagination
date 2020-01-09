import React from 'react';

const Dropdown = ({options, activeOption, handleOnSelect, title = "Select"}) => {
  return (
    <div className="dropdown mb-2">
      <button
        id="dropdownMenuButton"
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {title} ({activeOption})
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {options.map(({value, label}, index) => {
          const isCurrent = value === activeOption;

          return isCurrent
            ? ( <span key={index} className="dropdown-item active">{label}</span> )
            : ( <a key={index} className="dropdown-item" onClick={(e) => handleOnSelect(e, value)} href="!#">{label}</a> );
        })}
      </div>
    </div>
  )
}

export default Dropdown;
