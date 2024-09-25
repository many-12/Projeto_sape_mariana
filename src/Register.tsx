import { useState } from "react";
import sapeLogo from "./assets/sapezin.png";
import "./App.css";

function Register() {
  const [isAluno, setIsAluno] = useState(true);

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formJson),
    });
    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <>
      <div className="container">
        <div className="BolhaCompleta">
          <div className="CirculoPerfil">
            <img src={sapeLogo} className="logo react" />
          </div>
        </div>
        <p className="TextoCentro">
          <br />
          Olá, mais uma vez! <br /> <br />
          Informe os dados requisitados para ter acesso ao sistema.
        </p>
        <br />
        <div className="button-group">
          <button
            className={`toggle-button ${isAluno ? "active" : ""}`}
            onClick={() => setIsAluno(true)}
          >
            Aluno
          </button>
          <button
            className={`toggle-button ${!isAluno ? "active" : ""}`}
            onClick={() => setIsAluno(false)}
          >
            Professor
          </button>
        </div>

        <form method="post" onSubmit={handleSubmit}>
          <br />
          <input
            type="text"
            id="matricula"
            name="matricula"
            placeholder="Matrícula"
            className="inputs"
          ></input>
          <br />
          <br />
          <input
            type="text"
            id="NomeCompleto"
            name="NomeCompleto"
            placeholder="Nome Completo"
            className="inputs"
          ></input>
          <br />
          <br />
          <input
            type="text"
            id="DataNascimento"
            name="DataNascimento"
            placeholder="Data de Nascimento (EX: XX/XX/XXXX)"
            className="inputs"
          ></input>
          <br />
          <br />
          <input
            type="text"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="inputs"
          ></input>
          <br />
          <br />
          <input
            className="botaoentrar"
            type="submit"
            name="entrada"
            value="FINALIZAR CADASTRO"
          />
        </form>

        <br />
      </div>
    </>
  );
}

export default Register;
