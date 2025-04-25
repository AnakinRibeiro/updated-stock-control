import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Solicitations() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); // Protege a rota
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      SOLICITATIONS
    </div>
  );
}
