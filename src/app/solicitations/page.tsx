import { withPrivateLayout } from "@/utils/auth/withPrivateLayout";
import SolicitationsTotalizers from "@/components/composite/solicitations/SolicitationsTotalizers";
import SolicitationsPanel from "@/components/composite/solicitations/SolicitationsPanel";

async function Solicitations() {
  return (
    <div className="h-screen pt-[40px] pb-[20px]">
      <SolicitationsTotalizers />
      <SolicitationsPanel />
    </div>
  );
}

export default withPrivateLayout(Solicitations);
