interface Props {
  product: Product
}


export default function ShopPanelProduct({ product }: Props) {
  return (
    <div className="shop-panel-product">
      <h3>{ product.name }</h3>
    </div>
  );
}
