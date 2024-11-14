import deleteProfile from "@/actions/profile/deleteProfile";
import ActionConfirmationButton from "@/components/common/buttons/ActionConfirmationButton";
import ConfirmationButton from "@/components/common/buttons/ConfirmationButton";
import LanguageSelect from "@/components/common/inputs/LanguageSelect";
import DeleteProfileButton from "@/components/custom/user/DeleteProfileButton";
import SubPageLayout from "@/components/layouts/SubPageLayout";
import { routes } from "@/constants/routes";
import { Grid2 } from "@mui/material";
import { NextPage } from "next";
import { signOut } from "next-auth/react";
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
          <LanguageSelect />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <DeleteProfileButton />
        </Grid2>
      </Grid2>
    </SubPageLayout>
  );
};
export default Page;
