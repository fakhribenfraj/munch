import Block from "@/components/common/surfaces/Block";
import { Typography } from "@mui/material";
import { NextPage } from "next";
const Home: NextPage = async () => {

  return (
    <Block>
      <Typography variant="h4">this is the dashboard</Typography>
      <Typography sx={{ wordBreak: "break-all" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor?
        Quibusdam impedit, qui consequuntur itaque dolorem architecto quis.
        Minima quod ab obcaecati nobis officia fuga consectetur repellat
        laboriosam illo voluptatem.
      </Typography>
    </Block>
  );
};
export default Home;
