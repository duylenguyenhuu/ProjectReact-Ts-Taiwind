import { Box, Pagination } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProject } from "../../../../../../interfaces/IProject";

export type IPaging = {
  page: number;
  pageSize: number;
  total: number;
};
const List = () => {
  const [data, setData] = useState<IProject[]>([]);
  const [paging, setPagding] = useState<IPaging[]>([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(result.data);
    })();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "userId", headerName: "PIC", flex: 1 },
    { field: "title", headerName: "POC", flex: 1 },
    { field: "body", headerName: "Project No.", flex: 1 },
  ];

  return (
    <>
      <Box
        sx={{
          [".MuiDataGrid-root"]: {
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          },
        }}
      >
        <DataGrid rows={data} columns={columns} />
      </Box>
      <Pagination
        className="flex justify-center mt-4"
        count={10}
        color="primary"
      />
    </>
  );
};

export default List;
