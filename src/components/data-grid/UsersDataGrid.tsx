"use client";
import { routes } from "@/constants/routes";
import { Chip, Link } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";

type UsersDataGridProps = {
  users: any[];
};
const UsersDataGrid = ({ users }: UsersDataGridProps) => {
  const t = useTranslations("adminUsers.datagrid");
  const columns: GridColDef[] = [
    {
      field: "fullName",
      headerName: t("name"),
      flex: 1,
      minWidth: 200,
    },
    {
      field: "emailAddress",
      headerName: t("emailAddress"),
      flex: 1,
      minWidth: 200,
    },
    {
      field: "organisationNames",
      headerName: t("organisationNames"),
      width: 220,
      renderCell(params) {
        return params.row.organisationNames.join(", ");
      },
    },
    { field: "userType", headerName: t("userType"), width: 180 },
    {
      field: "status",
      headerName: t("status"),
      width: 130,
    },
  ];

  return (
    <>
      {users?.length > 0 ? (
        <DataGrid rows={users} columns={columns} />
      ) : (
        <p>{t("emptyRows")}</p>
      )}
    </>
  );
};

export default UsersDataGrid;
