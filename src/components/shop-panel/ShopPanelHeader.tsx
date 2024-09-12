import Image from "next/image"


export default function ShopPanelHeader() {
  return (
    <header>
      <Image src="/images/scribble.svg" alt="Coffee scribble" width={300} height={300} />
      <h1>Our Collection</h1>
      <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
    </header>
  );
}
