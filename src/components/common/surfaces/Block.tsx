import { Card, CardContent, CardHeader, CardProps } from "@mui/material";
import React, { ReactNode } from "react";

type BlockProps = CardProps & {
  children: ReactNode;
  title?: string;
  action?: ReactNode;
};
const Block = ({
  children,
  action,
  title,
  sx,
  elevation,
  ...props
}: BlockProps) => {
  return (
    <Card
      {...props}
      elevation={elevation}
      sx={[
        { position: "relative", overflow: "visible" },
        elevation == undefined && { boxShadow: "none" },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {(action || title) && <CardHeader title={title} action={action} />}
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default Block;
