export const reduxObjectBuilder = (id_of_row_in_DB, theProductID, dataCame) => {
  return {
    id_of_row_in_DB: id_of_row_in_DB,
    theProductID: theProductID,
    dataCame: dataCame,
  };
};
