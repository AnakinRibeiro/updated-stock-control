import { withPrivateLayout } from "@/utils/auth/withPrivateLayout";

async function Home() {
  return <h1>Home</h1>;
}

export default withPrivateLayout(Home);
