import Link from "next/link";
import "./styles.css";

export default function GridMenu({ items }) {
  return (
    <div className="grid-container">
      {items.map((item, index) => (
        <Link key={index} href={item.href} className="no-underline">
          <div className="grid-item">
            <div className="grid-img">
              <img src={item.image} alt={item.alt} className="imgMedium" />
            </div>
            <div className="textGrid">
              <h2>{item.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
