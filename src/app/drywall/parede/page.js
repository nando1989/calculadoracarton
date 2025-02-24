'use client';

import { useState } from 'react';
import './styles.css';
import Navbar from '@/components/navbar/Navbar';

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
      <>
      <Navbar/>
        <div className="container-area-calculator">

            <img
                src="/img-parede.png"
                alt="Caminhão de frete"
                className="removivelImg"
            />
            <h2 className="title-calculator">Calculadora parede de Drywall</h2>
            <label>Largura do Teto (m):</label>
            <input
                type="number"
                value={largura}
                onChange={(e) => setLargura(e.target.value)}
                className="w-full p-2 border rounded"
                step="0.01"
            />

            <label className="block text-left mt-2">Comprimento do Teto (m):</label>
            <input
                type="number"
                value={comprimento}
                onChange={(e) => setComprimento(e.target.value)}
                step="0.01"
            />

            <label className="block text-left mt-2">Orientação das Placas:</label>
            <select
                value={orientacao}
                onChange={(e) => setOrientacao(e.target.value)}
                className="w-full p-2 border rounded"
            >
                <option value="comprimento">Maior lado no Comprimento</option>
                <option value="largura">Maior lado na Largura</option>
            </select>

            <button
                onClick={handleCalcular}
                className="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >Calcular</button>

            {resultado && (
                <div className="mt-4 text-left">
                    <p>Quantidade de Placas: <strong>{resultado.totalPlacas}</strong></p>
                    <p>Quantidade de Cantoneiras: <strong>{resultado.totalCantoneira}</strong></p>
                    <p>Quantidade de Longarinas: <strong>{resultado.totalLongarinas}</strong></p>
                    <p>Quantidade de Travessas: <strong>{resultado.totalTravessas}</strong></p>
                </div>
            )}
        </div></>
    );
}
