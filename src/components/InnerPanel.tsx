interface Props {
  children: any
}


export default function InnerPanel({ children }: Props) {
  return (
    <section className="inner-panel">
      { children }
    </section>
  );
}