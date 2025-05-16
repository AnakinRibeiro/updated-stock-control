import { withPrivateLayout } from "@/utils/auth/withPrivateLayout";
import ProductsTotalizers from "@/components/composite/products/ProductsTotalizers";
import ProductPanel from "@/components/composite/products/ProductsPanel";

async function Products() {
  return (
    <div className="h-screen pt-[40px] pb-[20px]">
      <ProductsTotalizers />
      <ProductPanel />
    </div>
  );
}

export default withPrivateLayout(Products);
