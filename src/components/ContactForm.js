import React from "react";
import Container from "react-bootstrap/Container";

const ContactForm = () => {
  return (
    <Container id="formContainer" className="col-8">
      <h2 className="d-flex justify-content-center mb-5">
        <span className="ms-3 px-2"> -- </span>Contact
        <span className="px-2"> --</span>
      </h2>

      {/* <form className="mx-auto col-6" action="get">
        <div className="row">
          <div className="mb-3 col-6">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nom"
            />
          </div>
          <div className="mb-3 col-6">
            <input
              type="text"
              className="form-control" 
              id="first-name"
              placeholder="Prénom"
            />
          </div>
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Votre e-mail"
          />
        </div>
        <div className="mb-3">
          <textarea
            className=" form-control"
            id="Textarea1"
            rows="3"
            placeholder="Votre message"
          ></textarea>
        </div>
        <div className="d-grid gap-1 d-md-flex justify-content-md-center">
          <button
            className="btn btn-secondary border border-dark me-md-2"
            type="submit"
          >
            Envoyer
          </button>
          <button className="btn btn-secondary border border-dark" type="reset">
            Annuler
          </button>
        </div>
      </form> */}
      <section className="d-flex justify-content-between w-50 mx-auto align-items-center">
        <div id="contactLegend">
          <p>E-mail</p>
          <p>Téléphone</p>
          <p>Adresse</p>
        </div>
        <div id="contactLinks">
          <a className="" href="mailto:olwen@owempe.eu">
            <li>olwen@wempe.eu</li>
          </a>
          <a id="phoneCall" href="tel:+33683620301">
            <li>(+33) 06 83 62 03 01</li>
          </a>
          <a className="text-end" href="https://goo.gl/maps/EH4ftfr5xi3Ta8t69">
            <li>Kerimelin 56930 Pluméliau-Bieuzy</li>
          </a>
        </div>
      </section>
    </Container>
  );
};

export default ContactForm;
