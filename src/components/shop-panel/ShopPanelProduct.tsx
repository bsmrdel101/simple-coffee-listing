import Image from "next/image"

interface Props {
  product: Product
}


export default function ShopPanelProduct({ product }: Props) {
  return (
    <div className="shop-panel-product">
      { product.popular && <p className="shop-panel-product__popular-tag">Popular</p> }
      <Image src={product.image} alt={product.name} width={250} height={150} />
      <div className="shop-panel-product__title">
        <h3>{ product.name }</h3>
        <p className="shop-panel-product__price">{ product.price }</p>
      </div>
      <div className="shop-panel-product__rating">
        <Image src="/images/icons/star-filled.svg" alt="Star" width={23} height={23} />
        <p>{ product.rating } <span>({ product.votes } votes)</span></p>
      </div>
    </div>
  );
}
