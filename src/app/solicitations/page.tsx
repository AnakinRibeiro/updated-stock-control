import { withPrivateLayout } from "@/utils/auth/withPrivateLayout";
import SolicitationsTotalizers from "@/components/composite/SolicitationsTotalizers";

async function Solicitations() {
  return (
    <div className="h-screen pt-[40px] pb-[20px]">
      <SolicitationsTotalizers />
    </div>
  );
}

export default withPrivateLayout(Solicitations);
