import Button from "../library/Button";
import ShopPanelGrid from "./ShopPanelGrid";
import ShopPanelHeader from "./ShopPanelHeader";


export default function ShopPanel() {
  return (
    <div className="shop-panel">
      <ShopPanelHeader />

      <div className="shop-panel__control-row">
        <Button variant={['primary']}>All Products</Button>
        <Button variant={['secondary']}>Available Now</Button>
      </div>

      <ShopPanelGrid />
    </div>
  );
}
