import Link from "next/link";
import './styles.css';
import Navbar from "@/components/navbar/Navbar";

export default function GridMenu() {
  return (<>
    <Navbar/>
    <div className="grid-temper">
      
      <Link href="/moto" >
        <div className="grid-temper-1">
          <div className="grid-temper-2">
            < img
              src="/janela-4-folhas.jpg"
              alt="forro removivel"
              className="imgGlass"
            />
          </div>
          <div className="textGrid">
            <h2>forro removível</h2>

          </div>
        </div>
      </Link>

      <Link href="/moto" >
        <div className="grid-temper-1">
          <div className="grid-temper-2">
            < img
              src="/janela-2-folhas.jpg"
              alt="forro removivel"
              className="imgGlass"
            />
          </div>
          <div className="textGrid">
            <h2>forro removível</h2>

          </div>
        </div>
      </Link>
      
      <Link href="/moto" >
        <div className="grid-temper-1">
          <div className="grid-temper-2">
            < img
               src="/box-4-folhas.png"
              alt="forro removivel"
              className="imgGlass"
            />
          </div>
          <div className="textGrid">
            <h2>forro removível</h2>

          </div>
        </div>
      </Link>

      <Link href="/moto" >
        <div className="grid-temper-1">
          <div className="grid-temper-2">
            < img
              src="/box-2-folhas.png"
              alt="forro removivel"
              className="imgGlass"
            />
          </div>
          <div className="textGrid">
            <h2>forro removível</h2>

          </div>
        </div>
      </Link>

    </div></>
  );
}
