import Image from "next/image";

interface Props {
  src: string
  alt: string
}


export default function BannerImg({ src, alt }: Props) {
  return (
    <Image src={src} alt={alt} className="banner-img" fill priority />
  );
}
