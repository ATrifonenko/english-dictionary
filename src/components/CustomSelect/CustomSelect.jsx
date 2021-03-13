import React, { useState, createRef } from 'react';
import './CustomSelect.css';

export function Select(props) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(() => {
    let initialState = {};
    React.Children.forEach(props.children, (child, id) => {
      if (id === 0 || child.props.selected) initialState = { id, lable: child.props.lable || child.props.children };
    });
    return initialState;
  });
  const refOptionList = createRef();

  const openSelect = () => {
    if (open) {
      setOpen(false);
    } else {
      refOptionList.current.focus();
      setOpen(true);
    }
  };

  const handleSelectOption = (id, value, lable) => {
    setSelectedOption({ id, lable });
    setOpen(false);
    if (props.onChange) props.onChange(value);
  };

  const handleBlur = () => {
    if (open) {
      setTimeout(() => setOpen(false), 150);
    }
  };

  const optionList = React.Children.map(props.children, (child, id) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        handleSelectOption,
        id,
        lable: child.props.lable || child.props.children,
        selected: selectedOption.id === id,
      });
    }
    return child;
  });

  return (
    <div className={`select ${open ? 'select_open' : ''}`}>
      <div className="select__selected">
        <div className="select__selected-value" onClick={openSelect}>
          {selectedOption.lable}
        </div>
      </div>
      <div ref={refOptionList} className="select__option-list" tabIndex="-1" onBlur={handleBlur}>
        {optionList}
      </div>
    </div>
  );
}

export function Option({ id, value, lable, handleSelectOption, ...props }) {
  return (
    <div
      className={`select__option ${props.selected ? 'select__option_selected' : ''}`}
      onClick={() => handleSelectOption(id, value, lable)}
    >
      {lable}
    </div>
  );
}
