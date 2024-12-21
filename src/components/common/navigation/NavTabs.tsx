import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs, { TabsProps } from "@mui/material/Tabs";

type NavTabsProps = Omit<TabsProps, "value" | "onChange"> & {
  links: { label: string; url: string }[];
  active: number;
};
export default function NavTabs({ links, active, ...props }: NavTabsProps) {
  return (
    <Box sx={{ borderBottom: "1px solid ", borderColor: "divider" }}>
      <Tabs {...props} value={active} role="navigation">
        {links.map((link) => (
          <Tab
            key={link.label}
            label={link.label}
            href={link.url}
            focusRipple
          />
        ))}
      </Tabs>
    </Box>
  );
}
