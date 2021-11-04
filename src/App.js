import "./App.css";
import Form from "./component/Form";
import Result from "./component/Result";
import Footer from "./component/Footer";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(false);
  const [retour, setRetour] = useState(false);

  const handleName = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPassword = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      password === confirmPassword &&
      name !== "" &&
      email !== "" &&
      password !== ""
    ) {
      return setStep(true);
    }
  };

  const onClick = () => {
    return setRetour(true);
  };

  return (
    <div className="container">
      <div>
        {!step ? (
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
        ) : (
          <Result
            name={name}
            email={email}
            password={password}
            onClick={onClick}
            retour={retour}
          />
        )}
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
