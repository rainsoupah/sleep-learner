
// index = index of post in array
export function power(po, payment) {
  return {
    type: 'POWER',
    po, // puchase order id's (data.idPO)
    payment //(data.today)
  };
}
