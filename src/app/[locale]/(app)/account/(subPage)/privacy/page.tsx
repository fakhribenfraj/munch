import ChangePasswordForm from "@/components/forms/account/ChangePasswordForm";
import SubPageLayout from "@/components/layouts/SubPageLayout";
import { routes } from "@/constants/routes";
import { Grid2 } from "@mui/material";
import { NextPage } from "next";
const Page: NextPage = async () => {
  return (
    <SubPageLayout
      maxWidth="lg"
      breadcrumbs={[
        {
          href: routes.ACCOUNT,
          label: "account",
        },
        {
          href: routes.ACCOUNT,
          label: "security",
        },
      ]}
    >
      <Grid2
        container
        rowGap={4}
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid2 size={{ xs: 12, md: 9 }}>
          <ChangePasswordForm />
        </Grid2>
      </Grid2>
    </SubPageLayout>
  );
};
export default Page;
