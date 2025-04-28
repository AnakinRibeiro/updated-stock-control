import { withPrivateLayout } from "@/utils/auth/withPrivateLayout";

async function Solicitations() {
  return <h1>SOLICITATIONS</h1>;
}

export default withPrivateLayout(Solicitations);
