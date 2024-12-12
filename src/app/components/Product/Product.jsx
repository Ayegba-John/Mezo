const product = (props) => {
  return (
    <div>
      <p>Hello world</p>

      <h1>{props.name}</h1>
      <h2>{props.discription}</h2>
      <h2>${props.price}</h2>
    </div>
  );
};
export default product;
