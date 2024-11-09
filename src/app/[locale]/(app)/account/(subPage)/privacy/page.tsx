import getProfile from "@/actions/profile/getProfile";
import ChangePasswordForm from "@/components/forms/account/ChangePasswordForm";
import ProfileForm from "@/components/forms/account/ProfileForm";
import SubPageLayout from "@/components/layouts/SubPageLayout";
import { routes } from "@/constants/routes";
import { Box, Grid2, List, ListItem, Typography } from "@mui/material";
import { NextPage } from "next";
const Page: NextPage = async () => {
  const profile = await getProfile();
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
          label: "Privacy & security",
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
