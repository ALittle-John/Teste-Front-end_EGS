import React, { useState, useEffect/*, useContext*/ } from 'react';
import { useNavigate /*,Link*/} from 'react-router-dom';

// import { FormContext, FormProvider } from '../components/FormContext';
import '../App';
import './register';
import '../components/css/App.css';
import '../components/css/color.css';
import logo from '../assets/logo_null_egs.png';

const SaveSignup = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [birthday, setBirthday] = useState('');
  const [principalMail, setPrincipalMail] = useState('');
  const [cpfNumber, setCPFNumber] = useState('');
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const navigate = useNavigate();

  // const { addFormData } = useContext(FormContext);
  
  const handleButtonClick = () => {
    // const data = {
    //   name1,
    //   name2,
    //   birthday,
    //   principalMail,
    //   cpfNumber
    // };

    // addFormData(data);
    
    navigate('/register');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'Name1':
        setName1(value);
        break;
      case 'Name2':
        setName2(value);
        break;
      case 'Birthday':
        setBirthday(value);
        break;
      case 'PrincipalMail':
        setPrincipalMail(value);
        break;
      case 'CPFNumber':
        setCPFNumber(value);
        break;
      default:
        break;
    }
  };

  // Verificar se todos os campos obrigatórios estão preenchidos
  useEffect(() => {
    if (name1 && name2 && birthday && principalMail && cpfNumber) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  }, [name1, name2, birthday, principalMail, cpfNumber]);

  return (
    // <FormProvider>
      <div className="Total-scream1">
        <div className="Div-Left">
          <div className="imageContainer">
            <img src={logo} alt="Logo EGS Sistemas" />
          </div>
        </div>
        <div className="Div-Right">
          <h3>TESTE</h3>
          <h6>EGS SISTEMAS</h6>
          <label htmlFor="Name1">NOME:</label>
          <input
            name="Name1"
            type="text"
            placeholder="Escreva seu nome"
            value={name1}
            onChange={handleInputChange}
            required={true}
          />
          <label htmlFor="Name2">SOBRENOME:</label>
          <input
            name="Name2"
            type="text"
            placeholder="Escreva seu nome"
            value={name2}
            onChange={handleInputChange}
            required={true}
          />
          <label htmlFor="Birthday">IDADE:</label>
          <input
            name="Birthday"
            type="date"
            value={birthday}
            onChange={handleInputChange}
            required={true}
          />
          <label htmlFor="PrincipalMail">E-MAIL:</label>
          <input
            name="PrincipalMail"
            type="email"
            placeholder="Escreva seu Escreva seu e-mail"
            value={principalMail}
            onChange={handleInputChange}
            required={true}
          />
          <label htmlFor="CPFnumber">CPF:</label>
          <input
            type="text"
            name="CPFNumber"
            placeholder="000.000.000-00"
            title="Digite seu CPF"
            value={cpfNumber}
            onChange={handleInputChange}
            required={true}
          />
          <div>
            <label className="CheckBox" htmlFor="CheckBox">
              Aceito os termos e condições
              <input type="checkbox" />
            </label>
          </div>
          {/* <Link to="/register"> */}
            <button onClick={handleButtonClick} disabled={!allFieldsFilled}>ENVIAR</button>
          {/* </Link> */}
          <a href="#" className="noWhere">
            I'm already a member
          </a>
        </div>
      </div>
    // </FormProvider>
  );
};

export default SaveSignup;