import { useState } from "react";
import Button from "../library/Button";
import ShopPanelGrid from "./ShopPanelGrid";
import ShopPanelHeader from "./ShopPanelHeader";


export default function ShopPanel() {
  const [filter, setFiter] = useState('all');

  const listAllProducts = () => {
    setFiter('all');
  };

  const listAvailableProducts = () => {
    setFiter('available');
  };


  return (
    <div className="shop-panel">
      <ShopPanelHeader />

      <div className="shop-panel__control-row">
        <Button className={filter === 'all' ? 'button--active' : ''} onClick={listAllProducts}>All Products</Button>
        <Button className={filter === 'available' ? 'button--active' : ''} onClick={listAvailableProducts}>Available Now</Button>
      </div>

      <ShopPanelGrid filter={filter} />
    </div>
  );
}
