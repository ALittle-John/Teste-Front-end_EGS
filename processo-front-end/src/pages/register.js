import React /*{useContext}*/ from 'react';
import { useNavigate } from 'react-router-dom';
// import { FormContext } from '../pages/FormContext';

import tableData from '../components/catchCache';
import '../App';
import './signup'
import '../components/css/App2.css';
import '../components/css/color.css';
import logo from '../assets/logo_null_egs.png';

const Page2 = () => {

  const lastData = tableData[tableData.length - 1];

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="Total-scream2">
      <div className="header">
        <div className="Logo-container">
          <img className="imageLogo" onClick={handleButtonClick} src={logo} alt="Logo EGS Sistemas" />
        </div>
        <div className="Nome-e-Sobrenome">
            <span>{lastData.name1} {lastData.name2}</span>
        </div>
      </div>
      <div className="Schedule">
        <div className='Together'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Idade</th>
              <th>E-mail</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.name1}</td>
                <td>{data.name2}</td>
                <td>{data.birthday}</td>
                <td>{data.principalMail}</td>
                <td>{data.cpfNumber}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    </div>
  );
};

export default Page2;

// import React, {useContext} from 'react';
// import { FormContext } from '../components/FormContext';

// import '../App';
// import '../components/css/App2.css';
// import '../components/css/color.css';
// import logo from '../assets/logo_null_egs.png';

// const Page2 = () => {

//   const { tableData } = useContext(FormContext);

//   return (
//     <div className="Total-scream2">
//       <div className="header">
//         <div className="Logo-container">
//         <img src={logo} alt="Logo EGS Sistemas" />
//         </div>
//         <div className="Nome-e-Sobrenome">
//           gdvcjhdsb
//         </div>
//       </div>
//       <div className="Schedule">
//       <div>
//       <h1>Registro</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Nome</th>
//             <th>Sobrenome</th>
//             <th>Idade</th>
//             <th>E-mail</th>
//             <th>CPF</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((data, index) => (
//             <tr key={index}>
//               <td>{data.name1}</td>
//               <td>{data.name2}</td>
//               <td>{data.birthday}</td>
//               <td>{data.principalMail}</td>
//               <td>{data.cpfNumber}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//       </div>
//     </div>
//   );
// };

// export default Page2;
