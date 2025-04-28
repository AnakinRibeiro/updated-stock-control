import { withPrivateLayout } from "@/utils/auth/withPrivateLayout";

async function Products() {
  return <h1>PRODUCTS</h1>;
}

export default withPrivateLayout(Products);
