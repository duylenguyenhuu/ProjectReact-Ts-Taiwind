import { useReducer } from "react";
import { IProject } from "../../../../interfaces/IProject";

export interface IProjectReducer {
  project: IProject | null;
}

export const initialProjectState: IProjectReducer = {
  project: null,
};

type Action = { type: "setProject"; payload: IProjectReducer };

export const projectReducer = (
  state: IProjectReducer,
  action: Action
): IProjectReducer => {
  switch (action.type) {
    case "setProject":
      return { project: action.payload.project };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const useProjectReducer = () =>
  useReducer(projectReducer, initialProjectState);
