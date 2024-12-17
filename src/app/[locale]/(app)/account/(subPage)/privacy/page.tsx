import ChangePasswordForm from "@/components/forms/account/ChangePasswordForm";
import SubPageLayout from "@/components/layouts/SubPageLayout";
import { routes } from "@/constants/routes";
import { Grid2 } from "@mui/material";
import { NextPage } from "next";
import { getTranslations } from "next-intl/server";
const Page: NextPage = async () => {
  const t = await getTranslations();

  return (
    <SubPageLayout
      maxWidth="lg"
      breadcrumbLinks={[
        {
          href: routes.ACCOUNT,
          label: t("ACCOUNT"),
        },
        {
          href: routes.ACCOUNT,
          label: t("SECURITY"),
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
