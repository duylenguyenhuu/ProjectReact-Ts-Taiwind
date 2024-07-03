import { Box, Button, Pagination } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useConfirmModal } from "../../../../../../contexts/useConfỉmModal";
import { IProject } from "../../../../../../interfaces/IProject";
import { fetchTableAPI } from "../../../../../../utlis/api-services/projectServices";
import { useProjectContext } from "../../../../contexts/ProjectContext";

export type IPaging = {
  page: number;
  pageSize: number;
  total: number;
};

const List = () => {
  const navigate = useNavigate();
  const { showConfirmModal } = useConfirmModal();
  const [paging, setPaging] = useState<IPaging>({
    page: 1,
    pageSize: 10,
    total: 0,
  });
  const { projectList, setProjectList, setCurrentProject } =
    useProjectContext();

  useEffect(() => {
    fetchTableAPI().then((data) => {
      setProjectList?.(data);
      handleChangePaging({ total: data?.length });
    });
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "userId", headerName: "PIC", flex: 1 },
    { field: "title", headerName: "POC", flex: 1 },
    { field: "body", headerName: "Project No.", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box>
            <Button
              variant="contained"
              onClick={() =>
                showConfirmModal?.({
                  title: `Ban co muon xoa ${params.row.title}`,
                  onOK: () => {
                    //trong onOk la se goi 1 api xoa
                    handleChangeDelete(params);
                  },
                  titleClassName: "line-clamp-3",
                })
              }
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleGoEdit(params.row)}
            >
              Edit
            </Button>
          </Box>
        );
      },
    },
  ];

  const handleChangeDelete = (params: GridRenderCellParams) => {
    setProjectList?.((prev) =>
      prev.filter((item) => item.id !== params?.row?.id)
    );
    setPaging((prev) => ({ ...prev, total: prev.total - 1 }));
  };

  const handleChangePaging = (partialPaging: Partial<IPaging>) => {
    setPaging((prev) => ({ ...prev, ...partialPaging }));
  };

  const dataInTable = projectList?.slice(
    (paging.page - 1) * paging.pageSize,
    paging.page * paging.pageSize
  );

  const handleGoEdit = (prj: IProject) => {
    setCurrentProject?.(prj);
    navigate(`${prj.id}`);
  };

  console.log({ projectList });

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
        <DataGrid rows={dataInTable} columns={columns} />
      </Box>
      <Pagination
        className="flex justify-center mt-4"
        count={Math.ceil(paging.total / paging.pageSize)}
        color="primary"
        onChange={(_, page) => {
          handleChangePaging({ page: page ?? 0 });
        }}
      />
    </>
  );
};

//test git ne

export default List;
