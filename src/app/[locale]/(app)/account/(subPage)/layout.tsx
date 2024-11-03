import SubPageLayout from "@/components/layouts/SubPageLayout";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <SubPageLayout>{children}</SubPageLayout>;
};

export default Layout;
