import GridViewIcon from "@mui/icons-material/GridView";
import AssignmentIcon from "@mui/icons-material/Assignment";
import * as React from "react";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GppGoodIcon from "@mui/icons-material/GppGood";
import HouseIcon from "@mui/icons-material/House";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsIcon from "@mui/icons-material/Settings";
import { ROUTE } from "../../../constants";

export const routes: RouteItem[] = [
  {
    icon: <GridViewIcon />,
    path: ROUTE.DASHBOARD,
    name: "Dashboard",
  },
  {
    icon: <AssignmentIcon />,
    path: ROUTE.PROJECT,
    name: "Project",
  },
  {
    icon: <PeopleIcon />,
    path: ROUTE.CUSTOMER,
    name: "customer",
  },
  {
    icon: <AccountCircleIcon />,
    path: ROUTE.EMPLOYEE,
    name: "Employee",
  },
  {
    icon: <GppGoodIcon />,
    path: ROUTE.WARRANTY,
    name: "Warranty",
  },
  {
    icon: <HouseIcon />,
    path: ROUTE.INVENTORY,
    name: "Inventories",
  },
  {
    icon: <LeaderboardIcon />,
    path: ROUTE.FINANCE,
    name: "Finance & Report",
  },
  {
    icon: <SettingsIcon />,
    path: ROUTE.SETTING,
    name: "Setting",
  },
];

interface RouteItem {
  path: string;
  name: string;
  icon: React.ReactNode;
}
