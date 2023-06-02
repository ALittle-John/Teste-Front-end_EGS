// import React, { createContext, useState } from 'react';

// export const FormContext = createContext();

// export const FormProvider = ({ children }) => {
//   const [tableData, setTableData] = useState([]);

//   const addFormData = (formData) => {
//     setTableData([...tableData, formData]);
//   };

//   return (
//     <FormContext.Provider value={{ tableData, addFormData }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

// export default FormContext;