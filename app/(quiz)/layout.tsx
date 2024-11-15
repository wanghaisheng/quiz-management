import RootNavBar from "@/components/RootNavBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <RootNavBar />
      <main className="p-1">{children}</main>
    </div>
  );
};

export default RootLayout;
