import React /*{ useState }*/ from 'react';
import {useNavigate} from 'react-router-dom';

import '../App';
import './register';
import '../components/css/App.css';
import '../components/css/color.css';
import  logo from '../assets/logo_null_egs.png';

// export const SaveSignup = () => {
//   const [name1, setName1] = useState('')
//   const [name2, setName2] = useState('')
//   const [birthday, setBirthday] = useState('')
//   const [principalmail, setPrincipalMail] = useState('')
//   const [cpfnumber, setCPFnumber] = useState('')

  // function Page1() {
    const Page1 = () => {

      const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/register');
  };

  //   const handleButtonClick = () => {
  //     window.location.href = './register';
  // };

    return (
      <div className="Total-scream1">
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
          <input 
          className="Name1" 
          type="text" 
          placeholder="Escreva seu nome" 
          required={true}/>
          
          <label htmlFor="Name2">SOBRENOME:</label>
          <input 
          className="Name2" 
          type="text" 
          placeholder="Escreva seu nome" 
          required={true}/>

          <label htmlFor="Birthday">IDADE:</label>
          <input 
          className="Birthday" 
          type="date" 
          required={true}/>

          <label htmlFor="PrincipalMail">E-MAIL:</label>
          <input 
          className="PrincipalMail" 
          type="email" 
          placeholder="Escreva seu Escreva seu e-mail" 
          required={true}/>

          <label htmlFor="CPFnumber">CPF:</label>
          <input 
          className="CPFnumber" 
          type="text" 
          placeholder="000.000.000-00" 
          title="Digite seu CPF" 
          required={true}/>

          <div>
            <label className="CheckBox" htmlFor="CheckBox">Aceito os termos e condições
              <input type="checkbox"/>
            </label>
          </div>

            <button onClick={handleButtonClick}>
              ENVIAR
            </button>
          <a href="#" className="noWhere">I'm already a a member</a>
        </div>
      </div>
    );
  };
// };
export default Page1;