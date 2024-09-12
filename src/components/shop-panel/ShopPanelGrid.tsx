import { Fragment, useEffect, useState } from "react";
import ShopPanelProduct from "./ShopPanelProduct";


export default function ShopPanelGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawData = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
        const res = await rawData.json();
        setProducts(res);
      } catch (error) {
        console.error(`API ERROR: ${error}`);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="shop-panel__grid">
      {products.map((product) => {
        return (
          <Fragment key={product.id}>
            <ShopPanelProduct product={product} />
          </Fragment>
        );
      })}
    </div>
  );
}
