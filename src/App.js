import "./App.css";
import Form from "./component/Form";
import Result from "./component/Result";
// import Footer from "./component/Footer";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire

    if (password === confirmPassword) {
      return (
        <div>
          <Result />
        </div>
      );
    } else {
      return alert("password are not similar");
    }
  };

  return (
    <div className="container">
      <div>
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
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
