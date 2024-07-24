import { createContext, ReactNode, useContext, useState } from "react";
import { IEmployee } from "../../../interfaces/Employee";

interface IEmployeeContext {
  currentEmployee?: IEmployee;
  setCurrentEmployee?: React.Dispatch<
    React.SetStateAction<IEmployee | undefined>
  >;
  employeeList?: IEmployee[];
  setEmployeeList?: React.Dispatch<React.SetStateAction<IEmployee[]>>;
}

const EmployeeContext = createContext<IEmployeeContext>({});

export const EmployeeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentEmployee, setCurrentEmployee] = useState<IEmployee>();
  const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);
  return (
    <EmployeeContext.Provider
      value={{
        currentEmployee,
        setCurrentEmployee,
        employeeList,
        setEmployeeList,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
export const useEmployeeContext = () => useContext(EmployeeContext);
