export const reduxObjectBuilder = (id_of_row_in_DB, theProductID, dataCame) => {
  return {
    id_of_row_in_DB,
    theProductID,
    dataCame,
  };
};

export const totalPrice = (cart) => {
  let total = 0;
  cart.map((ele) => (total = total + ele.dataCame.price));
  return total.toFixed(2);
};
