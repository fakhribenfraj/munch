"use client";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { Box, Stack } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

type SortableItem = {
  id: string;
};
type SortableDatagridProps = {
  rows: SortableItem[];
  columns: GridColDef[];
  hideHead?: boolean;
  onSort?: (items: SortableItem[]) => void;
};
const SortableDatagrid = ({
  rows,
  columns,
  onSort,
  hideHead,
}: SortableDatagridProps) => {
  const [items, setItems] = useState(rows);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 50,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((element) => element.id == active.id);
        const newIndex = items.findIndex((element) => element.id == over?.id);
        const orderedItems = arrayMove(items, oldIndex, newIndex);
        onSort && onSort(orderedItems);

        return orderedItems;
      });
    }
  }
  return (
    <Stack>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((product: any) => (
            <SortableItem
              key={product.id}
              id={product.id}
              row={product}
              columns={columns}
            />
          ))}
        </SortableContext>
      </DndContext>
    </Stack>
  );
};
const SortableItem = ({
  id,
  columns,
  row,
  ...props
}: {
  id: string;
  columns: GridColDef[];
  row: any;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({ id });

  const cellStyles = {
    display: "flex",
    alignItems: "center",
  };
  return (
    <Stack
      direction={"row"}
      ref={setNodeRef}
      {...attributes}
      sx={{
        transform: CSS.Transform.toString(transform),
        transition,
        minHeight: 52,
        borderBottom: "1px dashed",
        borderColor: "grey.300",
        "&[aria-pressed='true']": {
          backgroundColor: "common.white",
          zIndex: 1,
          boxShadow: 4,
          border: "none",
          transform: `translate3d(0,${transform?.y}px,0) scaleX(1.02) scaleY(1.1)`,
        },
      }}
    >
      {columns.map((column) => (
        <Box
          key={column.field + id}
          sx={[
            cellStyles,
            { p: 2 },
            column.flex
              ? { flex: column.flex, minWidth: column.minWidth }
              : { width: column.width },
          ]}
        >
          {column.field == "sort" ? (
            <Box
              sx={{
                cursor: "pointer",
                color: "grey",
                ...cellStyles,
              }}
              ref={setActivatorNodeRef}
              {...listeners}
            >
              <DragIndicatorIcon />
            </Box>
          ) : column.renderCell ? (
            //@ts-ignore
            column.renderCell({ row })
          ) : (
            row[column.field]
          )}
        </Box>
      ))}
    </Stack>
  );
};
SortableDatagrid.Item = SortableItem;
export default SortableDatagrid;
