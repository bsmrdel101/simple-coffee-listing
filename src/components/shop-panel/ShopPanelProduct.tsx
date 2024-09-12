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
      <div className="shop-panel-product__rating-container">
        <div className="shop-panel-product__rating">
          {product.rating > 0 ?
            <>
              <Image src="/images/icons/star-filled.svg" alt="Star" width={23} height={23} />
              <p>{ product.rating } <span>({ product.votes } votes)</span></p>
            </>
          :
            <>
              <Image src="/images/icons/star-empty.svg" alt="Empty star" width={23} height={23} />
              <p><span>No ratings</span></p>
            </>
          }
        </div>
        { !product.available && <p className="shop-panel-product__sold-out">Sold out</p> }
      </div>
    </div>
  );
}
