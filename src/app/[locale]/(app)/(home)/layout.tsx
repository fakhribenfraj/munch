import ResponsiveAppBar from "@/components/custom/ResponsiveAppBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ResponsiveAppBar />
      {children}
    </>
  );
}
