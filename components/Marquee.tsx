export default function Marquee() {
  return (
    <section className="py-20 skew-box bg-blue-600 overflow-hidden">
      <div className="content-unskew flex whitespace-nowrap animate-marquee py-4">
        <span className="brand-font font-black text-7xl text-black/80 px-10 italic">
          CERAMIC COATING • PAINT CORRECTION • INTERIOR DETAIL •{" "}
        </span>
        <span className="brand-font font-black text-7xl text-white px-10 italic">
          CERAMIC COATING • PAINT CORRECTION • INTERIOR DETAIL •{" "}
        </span>
        <span className="brand-font font-black text-7xl text-black/80 px-10 italic">
          CERAMIC COATING • PAINT CORRECTION • INTERIOR DETAIL •{" "}
        </span>
      </div>
    </section>
  );
}
