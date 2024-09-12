import InnerPanel from "@/components/InnerPanel";
import { Layout } from "@/components/Layout";
import ShopPanel from "@/components/shop-panel/ShopPanel";


export default function Index() {
  return (
    <Layout>
      <InnerPanel>
        <ShopPanel />
      </InnerPanel>
    </Layout>
  );
}
