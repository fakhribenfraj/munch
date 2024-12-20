import { routes } from "@/constants/routes";
import { Box, Stack } from "@mui/material";
import dynamic from "next/dynamic";

// Dynamic imports
const SubPageLayout = dynamic(
  () => import("@/components/layouts/SubPageLayout"),
  { ssr: true }
);

const PlateHeader = dynamic(
  () => import("@/components/custom/plate/PlateHeader"),
  { ssr: true }
);

const PlateDetails = dynamic(
  () => import("@/components/custom/plate/PlateDetails"),
  { ssr: true }
);

const SimilarPlates = dynamic(
  () => import("@/components/custom/plate/SimilarPlates"),
  { ssr: false } // Load after initial render
);

const AddReviewActionButton = dynamic(
  () => import("@/components/custom/action-buttons/AddReviewActionButton"),
  { ssr: false }
);

const PlatePage = () => {
  const id = 84;
  const img =
    "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=200&h=140&fit=crop&auto=format";

  return (
    <SubPageLayout
      buttonVariant="contained"
      disablePadding
      returnVariant="absolute"
      possiblePrevLinks={[
        `${routes.RESTAURANTS}/${id}/menu`,
        `${routes.WISHLIST}/plates`,
      ]}
    >
      <Box
        sx={{
          maxWidth: 480,
          margin: "0 auto",
          backgroundColor: "#fff",
          pb: 8,
        }}
      >
        <PlateHeader image={img} />
        <Stack sx={{ px: 2 }}>
          <PlateDetails />
          <SimilarPlates />
        </Stack>
      </Box>
      <AddReviewActionButton label="write review" />
    </SubPageLayout>
  );
};

export default PlatePage;
