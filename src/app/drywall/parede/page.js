'use client';

import { useState } from 'react';
import './styles.css';
import Navbar from '@/components/navbar/Navbar';

export default function CalculadoraDrywall() {
    const [largura, setLargura] = useState('');
    const [altura, setAltura] = useState('');
    const [orientacao, setOrientacao] = useState('altura');
    const [tamanhoPlaca, setTamanhoPlaca] = useState('1.20x1.80');
    const [resultado, setResultado] = useState(null);

    function calcularMateriais(larguraParede, alturaParede, orientacao, tamanhoPlaca) {
        const placas = {
            '1.20x1.80': { largura: 1.20, altura: 1.80 },
            '1.20x2.40': { largura: 1.20, altura: 2.40 }
        };

        const placaLadoMaior = orientacao === 'altura' ? placas[tamanhoPlaca].altura : placas[tamanhoPlaca].largura;
        const placaLadoMenor = orientacao === 'altura' ? placas[tamanhoPlaca].largura : placas[tamanhoPlaca].altura;

        const placasLargura = Math.ceil(larguraParede / placaLadoMenor);
        const placasAltura = Math.ceil(alturaParede / placaLadoMaior);
        const totalPlacas = Math.ceil((larguraParede * alturaParede * 2) / 2.16);



        const totalGuias = Math.ceil((2 * larguraParede) / 3.00);
        const totalMontantes = Math.ceil(larguraParede / 0.60) * (alturaParede / 3);
        const totalReguladores = totalMontantes * 3;
        const totalParafusosGn25 = totalPlacas * 36;
        const totalParafusosMetal = totalMontantes * 10;
        const totalMassa = totalPlacas * 1.5;
        const totalFitaTelada = totalPlacas * 5;

        return {
            totalPlacas,
            totalGuias,
            totalMontantes,
            totalReguladores,
            totalParafusosGn25,
            totalParafusosMetal,
            totalMassa,
            totalFitaTelada
        };
    }

    const handleCalcular = () => {
        const larguraNum = parseFloat(largura);
        const alturaNum = parseFloat(altura);

        if (!larguraNum || !alturaNum) {
            alert("Por favor, insira medidas válidas.");
            return;
        }

        const resultado = calcularMateriais(larguraNum, alturaNum, orientacao, tamanhoPlaca);
        setResultado(resultado);
    };

    return (
        <>
            <Navbar />
            <div className="container-area-calculator">
                <div className='container-img-form'>
                    <div className='container-img-parede'>
                        <img src="/img-parede.png" alt="Parede Drywall" className="drywallImg" />
                    </div>

                    <div className='container-form-parede'>
                        <h2 className="title-calculator">Calculadora Parede de Drywall</h2>
                        <label className='label-parede'>Largura da Parede (m):</label>
                        <input type="number" value={largura} onChange={(e) => setLargura(e.target.value)} step="0.01" />

                        <label className='label-parede'>Altura da Parede (m):</label>
                        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} step="0.01" />


                        <label className='label-parede'>Tamanho das Placas:</label>
                        <select value={tamanhoPlaca} onChange={(e) => setTamanhoPlaca(e.target.value)}>
                            <option value="1.20x1.80">1.20m x 1.80m</option>
                            <option value="1.20x2.40">1.20m x 2.40m</option>
                        </select>
                        <button onClick={handleCalcular} className="btn-calcular">Calcular</button>
                    </div>
                </div>
                {resultado && (
                    <div className="resultado">
                        <p>Placas: <strong>{resultado.totalPlacas}</strong></p>
                        <p>Guias: <strong>{resultado.totalGuias}</strong></p>
                        <p>Montantes: <strong>{resultado.totalMontantes}</strong></p>
                        <p>Parafusos Gn25: <strong>{resultado.totalParafusosGn25}</strong></p>
                        <p>Parafusos Metal: <strong>{resultado.totalParafusosMetal}</strong></p>
                        <p>Massa (kg): <strong>{resultado.totalMassa}</strong></p>
                        <p>Fita Telada (m): <strong>{resultado.totalFitaTelada}</strong></p>
                        
                    </div>
                )}
            </div>
        </>
    );
}
