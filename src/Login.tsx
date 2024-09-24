import { useState } from "react";
import sapeLogo from "./assets/sapezin.png";
import "./App.css";

import { Link } from "react-router-dom";

// #perdão #amigos
// estou envergonhdo

function Login() {
  const [isAluno, setIsAluno] = useState(true);

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
          Olá! <br />
          Bem vindo ao SAPE - Sistema de auxílio para estudos! <br /> Faça seu
          login para aproveitar todas as ferramentas da plataforma{" "}
          <code>:)</code>
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

        <form action="principal.php" method="GET">
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
            value="ENTRAR!"
          />
        </form>

        <br />

        <p>
          Não se registrou ainda?
          <Link to="/register">
            {" "}
            Clique aqui! <code> ;)</code>
          </Link>
        </p>
        <p>Esqueceu sua senha? Entre em contato com a secretaria local.</p>
        <p>
          É o SAPE: um projeto de alunos, feito para alunos! <code>;)</code>
        </p>
      </div>
    </>
  );
}
export default Login;
