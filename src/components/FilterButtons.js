import React from "react";

export default ({
  onFilterIngredients,
  onFilterEquipment,
  onFilterPrepTime,
  onClearFilter,
}) => (
  <React.Fragment>
    <button onClick={() => onFilterIngredients([1, 3])}>
      with gochujang & an onion
    </button>
    <button onClick={() => onFilterPrepTime(30, "<")}>
      take less than 30 minutes to prepare
    </button>
    <button onClick={() => onFilterEquipment([1])}>
      require a rice cooker
    </button>
    <button onClick={() => onClearFilter()}>clear filter</button>
  </React.Fragment>
);
