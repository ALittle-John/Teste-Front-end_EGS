/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App';
import './App.css';
import  logo from '../assets/logo_null_egs.png'

function Page1() {
  return (
    <div className="Total-scream">
      <div className="Div-Left">
        <div className="imageContainer">
          <img src={logo} alt="Logo EGS Sistemas" />
        </div>
      </div>
      <div className="Div-Right">
        <h3>
          TESTE
          </h3>
        <h6>
          EGS SISTEMAS
        </h6>
        <label htmlFor="Name1">NOME:</label>
        <input class="Name1" type="text" placeholder="Escreva seu nome" required={true}/>
        <label htmlFor="Name2">SOBRENOME:</label>
        <input className="Name2" type="text" placeholder="Escreva seu nome" required={true}/>
        <label htmlFor="Birthday">IDADE:</label>
        <input className="Birthday" type="date" required={true}/>
        <label htmlFor="PrincipalMail">E-MAIL:</label>
        <input className="PrincipalMail" type="email" placeholder="Escreva seu Escreva seu e-mail" required={true}/>
        <label htmlFor="CPFnumber">CPF:</label>
        <input className="CPFnumber" type="text" placeholder="000.000.000-00" title="Digite seu CPF" required={true}/>
        <div>
          <label className="CheckBox" htmlFor="CheckBox">Aceito os termos e condições
            <input type="checkbox"/>
          </label>
        </div>
        <button>ENVIAR</button>
        <a href="#" className="noWhere">I'm already a a member</a>
      </div>
    </div>
  );
}

export default Page1