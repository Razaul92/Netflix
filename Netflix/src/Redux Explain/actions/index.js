export const incNumber = (num) => {
  // Actions Creator Function
  return {
    type: "INCREMENT", // Action
    payload: num,
  };
};

export const decNumber = (num) => {
  // Actions Creator Function
  return {
    type: "DECREMENT", // Action
    payload: num,
  };
};
