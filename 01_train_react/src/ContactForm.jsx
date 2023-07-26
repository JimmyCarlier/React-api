import { useState } from "react";

const ContactForm = () => {
  const [dataValue, setDataValue] = useState({
    nom: "",
    message: "",
  });
  const SubmitForm = (event) => {
    event.preventDefault();

    setDataValue({
      nom: event.target.name.value,
      message: event.target.message.value,
    });
  };

  return (
    <div className="formMessage">
      <form onSubmit={SubmitForm} className="columnForm">
        <>
          <label htmlFor="name">Nom :</label>
          <input type="text" name="name" />
        </>
        <>
          <label htmlFor="message">message :</label>
          <input type="text" name="message" />
        </>
        <>
          <input type="submit" />
        </>
      </form>
      <p>Votre message </p>
      <p>
        {dataValue.nom} : {dataValue.message}
      </p>
    </div>
  );
};
export default ContactForm;
