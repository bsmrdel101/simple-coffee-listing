import { Fragment, useEffect, useState } from "react";
import ShopPanelProduct from "./ShopPanelProduct";

interface Props {
  filter: string
}


export default function ShopPanelGrid({ filter }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawData = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
        const res = await rawData.json();
        if (filter === 'all') {
          setProducts(res);
        } else {
          const filteredRes = res.filter((p) => p.available);
          setProducts(filteredRes);
        }
      } catch (error) {
        console.error(`API ERROR: ${error}`);
      }
    };
    fetchData();
  }, [filter]);


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
