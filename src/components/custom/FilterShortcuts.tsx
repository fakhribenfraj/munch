"use client";
import { Box, Chip, Container, Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import React from "react";

type FilterShortcutsProps = {
  filters: string[];
};
const FilterShortcuts = ({ filters }: FilterShortcutsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const HEIGHT = 0;
  return (
    <Container maxWidth="md" disableGutters>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ hidden: true }}
        textColor="secondary"
        sx={{
          justifyContent: "center",
          minHeight: HEIGHT,
          pb: 1,
        }}
      >
        {filters.map((filter) => (
          <Tab
            key={filter}
            label={filter}
            disableRipple
            sx={{
              borderRadius: "16px",
              px: 1,
              py: 0.5,
              minHeight: HEIGHT,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "transparent",
              transition: "background-color 0.5s,color 0.5s",

              "&.Mui-selected": {
                backgroundColor: "secondary.main",
                color: "common.white",
              },
            }}
          />
        ))}
      </Tabs>
    </Container>
  );
};

export default FilterShortcuts;
