"use client";
import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Label, { LabelColor } from "../common/label";
import { useTranslations } from "next-intl";
export type TabsFilterOption = {
  value: number | string | null;
  label: string;
  color: LabelColor;
  total: number;
};
type TabsFilterProps = {
  dataTable: any[];
  filterBy: string;
  filterOptions: TabsFilterOption[];
  onChange: (tab?: number) => void;
};
const TabsFilter = ({ filterOptions, onChange }: TabsFilterProps) => {
  const t_status = useTranslations("genericStatus");

  const allFilters: TabsFilterOption[] = [
    {
      label: t_status("all"),
      value: null,
      color: "default",
      total: filterOptions.reduce((sum, filter) => sum + filter.total, 0),
    },
    ...filterOptions,
  ];
  const [tab, setTab] = useState<number | null>(null);
  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number | null
  ) => {
    setTab(newValue);
    onChange(newValue ?? undefined);
  };
  return (
    <Tabs value={tab} onChange={handleChange}>
      {allFilters.map((tab) => (
        <Tab
          key={tab.label}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          icon={<Label color={tab.color}>{tab.total}</Label>}
        />
      ))}
    </Tabs>
  );
};

export default TabsFilter;
