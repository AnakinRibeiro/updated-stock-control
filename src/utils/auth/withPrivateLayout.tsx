import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/composite/sidebar";
import { Header } from "@/components/composite/header";

export function withPrivateLayout(Component: React.FC) {
  return async function PrivateLayoutWrapper() {
    const session = await getServerSession(authOptions);

    if (!session) {
      redirect("/login");
    }

    return (
      <div className="antialiased bg-white w-full h-screen flex overflow-hidden">
        <Sidebar />
        <div className="flex-auto flex-col pl-[20px] pr-[20px]">
          <Header />
          <main className="flex-1">
            <Component />
          </main>
        </div>
      </div>
    );
  };
}
