export default (data) => {
  const response = {
    error: false,
  };
  if (data.origin === data.destination) {
    response.error = true;
    response.message = 'Origin cannot be same as destination';
  } else if (
    new Date(data.date) <
    new Date(
      `${new Date().getFullYear()}-0${
        new Date().getMonth() + 1
      }-${new Date().getDate()}`,
    )
  ) {
    response.error = true;
    response.message = 'Travel date cannot be less than today';
  } else if (data.returnDate <= data.date) {
    response.error = true;
    response.message = 'Return date cannot be less or equal to travel date';
  }
  return response;
};
