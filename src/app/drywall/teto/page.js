'use client';

import { useState } from 'react';
import './styles.css';
import Navbar from '@/components/navbar/Navbar';
import WhatsApp from '@/components/whatsappButton/whatsappButton';

export default function CalculadoraDrywall() {
    const [largura, setLargura] = useState('');
    const [comprimento, setComprimento] = useState('');
    const [orientacao, setOrientacao] = useState('comprimento');
    const [tamanhoPlaca, setTamanhoPlaca] = useState('1.20x1.80');
    const [resultado, setResultado] = useState(null);

    function calcularMateriais(larguraTeto, comprimentoTeto, orientacao, tamanhoPlaca) {
        const placas = {
            '1.20x1.80': { largura: 1.20, comprimento: 1.80 },
            '1.20x2.40': { largura: 1.20, comprimento: 2.40 }
        };

        const placaLadoMaior = orientacao === 'comprimento' ? placas[tamanhoPlaca].comprimento : placas[tamanhoPlaca].largura;
        const placaLadoMenor = orientacao === 'comprimento' ? placas[tamanhoPlaca].largura : placas[tamanhoPlaca].comprimento;

        const placasLargura = Math.ceil(larguraTeto / placaLadoMenor);
        const placasComprimento = Math.ceil(comprimentoTeto / placaLadoMaior);
        const totalPlacas = placasLargura * placasComprimento;

        const totalCantoneira = Math.ceil(((larguraTeto + comprimentoTeto) * 2) / 3.00);
        const totalF530 = Math.ceil((larguraTeto / 0.60) * comprimentoTeto / 3.00);
        const totalReguladores = totalF530 * 3;
        const totalParafusos = totalPlacas * 50;
        const totalMassa = totalPlacas * 1.5;
        const totalFitaTelada = totalPlacas * 5;

        return {
            totalPlacas,
            totalCantoneira,
            totalF530,
            totalReguladores,
            totalParafusos,
            totalMassa,
            totalFitaTelada
        };
    }

    const handleCalcular = () => {
        const larguraNum = parseFloat(largura);
        const comprimentoNum = parseFloat(comprimento);

        if (!larguraNum || !comprimentoNum) {
            alert("Por favor, insira medidas válidas.");
            return;
        }

        const resultado = calcularMateriais(larguraNum, comprimentoNum, orientacao, tamanhoPlaca);
        setResultado(resultado);
    };

    return (
        <>
            <Navbar />
            <div className="container-area-calculator">
                <div className='container-img-form'>
                    <div className='container-img-parede'>
                        <img src="/img-teto.png" alt="Teto Drywall" className="drywallImg" />
                    </div>

                    <div className='container-form-parede'>
                        <h2 className="title-calculator">Calculadora parede de Drywall</h2>
                        <label className='label-parede'>Largura do Teto (m):</label>
                        <input type="number" value={largura} onChange={(e) => setLargura(e.target.value)} step="0.01" />

                        <label className='label-parede'>Comprimento do Teto (m):</label>
                        <input type="number" value={comprimento} onChange={(e) => setComprimento(e.target.value)} step="0.01" />

                        <label className='label-parede'>Orientação das Placas:</label>
                        <select value={orientacao} onChange={(e) => setOrientacao(e.target.value)}>
                            <option value="comprimento">Maior lado no Comprimento</option>
                            <option value="largura">Maior lado na Largura</option>
                        </select>

                        <label className='label-parede'>Tamanho das Placas:</label>
                        <select value={tamanhoPlaca} onChange={(e) => setTamanhoPlaca(e.target.value)}>
                            <option value="1.20x1.80">1.20m x 1.80m</option>
                            <option value="1.20x2.40">1.20m x 2.40m</option>
                        </select><button onClick={handleCalcular} className="btn-calcular">Calcular</button>
                    </div>
                </div>



                {resultado && (
                    <div className="resultado">
                        <p>Placas: <strong>{resultado.totalPlacas}</strong></p>
                        <p>Cantoneiras: <strong>{resultado.totalCantoneira}</strong></p>
                        <p>Perfis F530: <strong>{resultado.totalF530}</strong></p>
                        <p>Reguladores e tirantes: <strong>{resultado.totalReguladores}</strong></p>
                        <p>Parafusos: <strong>{resultado.totalParafusos}</strong></p>
                        <p>Massa (kg): <strong>{resultado.totalMassa}</strong></p>
                        <p>Fita Telada (m): <strong>{resultado.totalFitaTelada}</strong></p><WhatsApp/>
                    </div>
                    
                )}
            </div>
        </>
    );
}
