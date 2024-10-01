"use client";
import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { usePathname } from "next/navigation";
import * as React from "react";

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return <Tab component={Link} {...props} />;
}
type NavTabsProps = {
  links: { label: string; url: string }[];
};
export default function NavTabs({ links }: NavTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
        ))
    ) {
      setValue(newValue);
    }
  };
  const pathname = usePathname();

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={links
          .map((link) => link.url)
          .findIndex((url) => pathname.endsWith(url))}
        onChange={handleChange}
        role="navigation"
      >
        {links.map((link) => (
          <LinkTab key={link.label} label={link.label} href={link.url} />
        ))}
      </Tabs>
    </Box>
  );
}
