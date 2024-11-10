import deleteProfile from "@/actions/profile/deleteProfile";
import ConfirmationButton from "@/components/common/buttons/ConfirmationButton";
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
          label: "settings",
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
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ConfirmationButton
            onConfirm={deleteProfile}
            content="this action will permanently delete your account and it is not reversible"
            color="error"
            title="Delete profile?"
            confirmLabel="delete"
          >
            delete profile
          </ConfirmationButton>
        </Grid2>
      </Grid2>
    </SubPageLayout>
  );
};
export default Page;
