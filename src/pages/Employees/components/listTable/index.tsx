import { Avatar, Box, Button, Pagination } from "@mui/material";

import { SetStateAction, useContext, useEffect, useState } from "react";
import { IPaging } from "../../../../interfaces/IPaging";
import {
  getListEmployeeAPI,
  IGetListEmployeeResponse,
} from "../../../../utlis/api-services/EmployeeServices";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IEmployee } from "../../../../interfaces/Employee";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSnackbar } from "../../../../contexts/useSnackbar";

const ListTable = () => {
  const { showSnackbar, currentSnackbar } = useSnackbar();

  const navigation = useNavigate();
  const [paging, setPaging] = useState<IPaging>({
    page: 1,
    pageSize: 10,
    total: undefined,
  });

  const {
    data,
    isLoading,
    isError,
    refetch: refetchList,
  } = useQuery({
    retry: false,
    queryKey: ["employees", paging],
    queryFn: async (): Promise<IGetListEmployeeResponse> => {
      try {
        const list = await getListEmployeeAPI(paging);
        return list;
      } catch (e) {
        showSnackbar({
          severity: "error",
          message: (
            <div className="flex flex-col justify-between">
              <div>Something wrong!</div>
              <Button
                variant="contained"
                color="secondary"
                onClick={async () => {
                  showSnackbar({ ...currentSnackbar, open: false });
                  const data = await refetchList();
                  console.log(data);
                  // showSnackbar({
                  //   severity: "warning",
                  // });
                }}
              >
                Retry
              </Button>
            </div>
          ),
          onClose: (event, reason) => {
            console.log("le", event, reason);
          },
        });
        throw e;
      }
    },
  });

  useEffect(() => {
    setPaging((prev) => ({ ...prev, total: data?.total }));
  }, [data]);

  const handleGoEmployee = (id: string) => {
    navigation(`${id}`);
  };

  const columns: GridColDef<IEmployee>[] = [
    {
      field: "avatar",
      headerName: "Avatar",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box>
            <Avatar
              alt="Remy sharp"
              src={params.row.avatar}
              variant="rounded"
              onClick={() => handleGoEmployee(params.row._id ?? "")}
            />
          </Box>
        );
      },
    },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contact_number", headerName: "Contact Number", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box className="flex gap-3">
            <Button
              variant="contained"
              color="success"
              onClick={() => showConfirmModal}
            >
              <EditIcon />
            </Button>
            <Button variant="contained">
              <DeleteIcon />
            </Button>
          </Box>
        );
      },
    },
  ];
  if (isLoading) {
    return <h1>....Loading</h1>;
  }
  const totalPage = Math.ceil((paging.total ?? 0) / (paging.pageSize ?? 0));

  const handlePageClick = (event: any, value: SetStateAction<number>) => {
    setPaging((prev) => ({ ...prev, page: +value }));
  };

  if (isError) {
    return <h1>There is a error</h1>;
  }

  return (
    <Box>
      <Box
        className="sm:bg-green-100"
        sx={{
          borderRadius: 5,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          [".MuiDataGrid-columnHeaders"]: {
            bgcolor: "pink",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          },
          [".MuiButtonBase-root"]: { color: "white" },
          [".MuiDataGrid-root"]: { borderRadius: "20px" },
          [".MuiDataGrid-cell"]: { display: "flex", alignItems: "center" },
        }}
      >
        <DataGrid
          rows={data?.employees}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: paging,
            },
          }}
          hideFooterPagination={true}
          checkboxSelection
          getRowId={(row) => row._id ?? 0}
        />
      </Box>
      <Box
        sx={{
          [".MuiPagination-ul"]: { justifyContent: "center" },
          marginTop: "20px",
        }}
      >
        <Pagination
          onChange={handlePageClick}
          count={totalPage}
          page={paging.page}
          variant="outlined"
          color="primary"
        />
      </Box>
    </Box>
  );
};
export default ListTable;
