import { withPrivateLayout } from "@/utils/auth/withPrivateLayout";

async function Stocks() {
  return <h1>STOCKS</h1>;
}

export default withPrivateLayout(Stocks);
