import Result from "./Result";

const Form = (props) => {
  const {
    name,
    email,
    password,
    confirmPassword,
    handleName,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
    handleSubmit,
  } = props;

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit} action="">
        <p>Name</p>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName}
        />

        <p>Email</p>
        <input
          type="email"
          placeholder="name@lereacteur.io"
          value={email}
          onChange={handleEmail}
        />

        <p>Password</p>
        <input
          name="password1"
          type="password"
          placeholder="LeReacteur21"
          value={password}
          onChange={handlePassword}
        />

        <p>Confirm Password</p>
        <input
          name="password2"
          type="password"
          placeholder="LeReacteur21"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Form;
