import Form from "./Form";

const Result = (props) => {
  const {
    name,
    email,
    password,
    retour,
    onClick,
    confirmPassword,
    handleName,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
    handleSubmit,
  } = props;

  return (
    <div className="result">
      {!retour ? (
        <div>
          <div className="result-content">
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Password : {password}</p>
          </div>
          <button onClick={onClick} retour={retour}>
            Return
          </button>
        </div>
      ) : (
        <Form
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          handleName={handleName}
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          handleConfirmPassword={handleConfirmPassword}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Result;
