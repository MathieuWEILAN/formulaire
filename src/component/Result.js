const Result = (props) => {
  return (
    <div>
      <div>
        <p>Name : {props.name}</p>
        <p>Email : {props.email}</p>
        <p>Password : {props.password} </p>
      </div>
    </div>
  );
};

export default Result;
