"use client"

import Navbar from "@/components/navbar/Navbar";
import './styles.css';

export default function FormularioSerrafrete() {


  return (<>
    <Navbar />
    <div className="containerMotoPage">

      <img
        src="/ferramentas.png"
        alt="ferramentas"
        className="motoImg"
      />
      <h1>Calculadora Carton.</h1>
      <p> A Calculadora Carton, uma ferramenta desenvolvida especialmente para vendedores que trabalham com
        drywall e precisam agilizar o atendimento aos clientes.
        Sabemos que o tempo é essencial no dia a dia de um vendedor, e fazer cálculos precisos para orçamentos pode ser
        um processo demorado. Por isso, criamos esta calculadora exclusiva, que permite estimar rapidamente a quantidade
        de materiais necessários para a instalação de forros de drywall e forro removível.
        Nosso objetivo é tornar o processo de venda mais eficiente, garantindo que você possa atender seus clientes com
        rapidez e precisão, sem complicações.
        Experimente agora e simplifique seu atendimento! 🚀</p>



    </div></>
  )
}
