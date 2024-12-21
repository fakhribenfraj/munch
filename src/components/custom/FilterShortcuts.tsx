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
  const HEIGHT = { xs: 56, sm: 64 };
  return (
    <Container maxWidth="md" disableGutters>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        sx={{
          justifyContent: "center",
          minHeight: HEIGHT,
        }}
      >
        {filters.map((filter) => (
          <Tab
            key={filter}
            label={filter}
            disableRipple
            sx={{
              minHeight: HEIGHT,
            }}
          />
        ))}
      </Tabs>
    </Container>
  );
};

export default FilterShortcuts;
