import { Box, Button, Modal, Pagination } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { IProject } from "../../../../../../interfaces/IProject";
import { fetchTableAPI } from "../../../../../../utlis/api-services/projectServices";
import { useConfirmModal } from "../../../../../../contexts/useConfỉmModal";

export type IPaging = {
  page: number;
  pageSize: number;
  total: number;
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const List = () => {
  const [data, setData] = useState<IProject[]>([]);
  const { showConfirmModal } = useConfirmModal();
  const [paging, setPaging] = useState<IPaging>({
    page: 1,
    pageSize: 10,
    total: 0,
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchTableAPI().then((data) => {
      setData(data);
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
      renderCell: (params) => {
        return (
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
        );
      },
    },
  ];
  const handleChangeDelete = (params: GridRenderCellParams) => {
    setData((prev) => prev.filter((item) => item.id !== params?.row?.id));
    setPaging((prev) => ({ ...prev, total: prev.total - 1 }));
    setOpen(false);
  };

  const handleChangePaging = (partialPaging: Partial<IPaging>) => {
    setPaging((prev) => ({ ...prev, ...partialPaging }));
  };
  const dataInTable = data.slice(
    (paging.page - 1) * paging.pageSize,
    paging.page * paging.pageSize
  );

  const handleClose = () => setOpen(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400, borderRadius: 4 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </>
  );
};

//test git ne

export default List;
