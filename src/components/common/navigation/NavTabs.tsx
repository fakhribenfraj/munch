import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs, { TabsProps } from "@mui/material/Tabs";

type NavTabsProps = Omit<TabsProps, "value" | "onChange"> & {
  links: { label: string; url: string }[];
  pathname: string;
};
export default function NavTabs({ links, pathname, ...props }: NavTabsProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        {...props}
        value={links
          .map((link) => link.url)
          .findIndex((url) => pathname.endsWith(url))}
        role="navigation"
      >
        {links.map((link) => (
          <Tab key={link.label} label={link.label} href={link.url} />
        ))}
      </Tabs>
    </Box>
  );
}
