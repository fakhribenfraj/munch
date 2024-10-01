"use client";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export type UrlActiveListItemProps = {
  url: string;
  icon: string;
  label: string;
  otherActiveUrls?: string[];
};
const UrlActiveListItem = ({
  otherActiveUrls = [],
  url,
  icon,
  label,
}: UrlActiveListItemProps) => {
  const pathname = usePathname();
  const isSelected = !![url, ...otherActiveUrls].find((url) =>
    pathname.startsWith(url)
  );
  return (
    <ListItemButton href={url} selected={isSelected}>
      <ListItemIcon>
        <Image src={icon} alt="sidebar icon" width={24} height={24} />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export default UrlActiveListItem;
