import GridMenu from "../components/GridMenu/GridMenu";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="grid-section">
          <GridMenu />
        </section>
      </main>
    </div>
  );
}
