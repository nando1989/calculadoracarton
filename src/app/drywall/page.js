'use client';

import { useState } from 'react';
import './styles.css';
import Navbar from '@/components/navbar/Navbar';
import Link from "next/link";
export default function CalculadoraForro() {
    const [largura, setLargura] = useState('');
    const [comprimento, setComprimento] = useState('');
    const [orientacao, setOrientacao] = useState('comprimento');
    const [resultado, setResultado] = useState(null);

    function calcularForro(larguraTeto, comprimentoTeto, orientacao) {
        const larguraPlaca = 1.25;
        const comprimentoPlaca = 0.62;
        const comprimentoLongarina = 3.25;
        const comprimentoCantoneira = 3.00;
        const comprimentoTravessa = 0.62;

        let placaLadoMaior, placaLadoMenor;
        if (orientacao === "comprimento") {
            placaLadoMaior = comprimentoPlaca;
            placaLadoMenor = larguraPlaca;
        } else {
            placaLadoMaior = larguraPlaca;
            placaLadoMenor = comprimentoPlaca;
        }

        const placasLargura = Math.ceil(larguraTeto / placaLadoMenor);
        const placasComprimento = Math.ceil(comprimentoTeto / placaLadoMaior);
        const totalPlacas = placasLargura * placasComprimento;

        const totalCantoneira = Math.ceil(((larguraTeto + comprimentoTeto) * 2) / comprimentoCantoneira);

        const fileirasLongarina = placasComprimento - 1;
        const totalLongarinas = Math.ceil((fileirasLongarina * larguraTeto) / comprimentoLongarina);

        const fileirasTravessas = placasLargura - 0.5;
        const totalTravessas = Math.ceil((fileirasTravessas * comprimentoTeto) / comprimentoTravessa);

        return {
            totalPlacas,
            totalCantoneira,
            totalLongarinas,
            totalTravessas
        };
    }

    const handleCalcular = () => {
        const larguraNum = parseFloat(largura);
        const comprimentoNum = parseFloat(comprimento);

        if (!larguraNum || !comprimentoNum) {
            alert("Por favor, insira medidas válidas.");
            return;
        }

        const resultado = calcularForro(larguraNum, comprimentoNum, orientacao);
        setResultado(resultado);
    };



    return (
        <><Navbar />
            <div className='container-drywall-calculator'>

                <div className="container-drywall">
                    <div className='box-teto'>
                        <Link href="/drywall/teto" className="no-underline">
                            < img
                                src="/tetodrywall.png"
                                alt="caminhao pequeno"
                                className="imgDrywall"
                            />
                        </Link>
                        <h2>Teto estruturado</h2>
                    </div>
                </div>
                <div className="container-drywall">
                    <div className='box-parede'>
                        <Link href="/drywall/parede" className="no-underline">
                            < img
                                src="/paredeDrywall.png"
                                alt="caminhao pequeno"
                                className="imgDrywall"
                            />
                            <h2>Parede simples </h2>
                        </Link>
                    </div>
                </div>



            </div>
        </>
    );
}
