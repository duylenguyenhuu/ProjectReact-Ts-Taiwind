import { IPaging } from "../../interfaces/IPaging";
import queryString from "query-string";
import { IEmployee, isEmployee } from "../../interfaces/Employee";
import { privateInstance } from "../../axios/axiosInstance";

const employeePath = "employees";

export interface IGetListEmployeeResponse {
  employees: IEmployee[];
  total: number;
}

export const getListEmployeeAPI = async (paging: IPaging) => {
  const query = queryString.stringify(paging);

  const request = await privateInstance.get(`${employeePath}?${query}`);
  if (!isListEmployeeResponse(request.data)) {
    console.log("Data is not a list employee ");

    throw new Error("Data is not a list employee response");
  }

  return request.data;
};

function isListEmployeeResponse(
  data: object
): data is IGetListEmployeeResponse {
  return (
    typeof data === "object" &&
    "total" in data &&
    typeof data.total === "number" &&
    "employees" in data &&
    Array.isArray(data.employees) &&
    data.employees.every(isEmployee)
  );
}
