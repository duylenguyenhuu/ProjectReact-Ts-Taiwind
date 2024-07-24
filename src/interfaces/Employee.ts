import { RoleEmployee } from "../constants/employee/RoleEmployee";

export interface IEmployee {
  _id?: string;
  name: string;
  contact_number?: string;
  email: string;
  password?: string;
  role: RoleEmployee;
  avatar: string;
  __v?: number;
}

export const isEmployee = (data: object): data is IEmployee => {
  return (
    typeof data === "object" && "name" in data && typeof data.name === "string"
  );
};
