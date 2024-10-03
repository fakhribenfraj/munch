import { getUserProfile } from "@/actions/authorization/getUserProfile";
import HideOnScroll from "@/components/common/navigation/HideOnScroll";
import { Box, Button, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
const Home: NextPage = async () => {
  const profile = await getUserProfile();
  return (
    <Stack gap={2}>
      {[...new Array(20)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join("\n")}
    </Stack>
  );
};
export default Home;
