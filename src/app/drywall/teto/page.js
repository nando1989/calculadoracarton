'use client';

import { useState } from 'react';
import './styles.css';
import Navbar from '@/components/navbar/Navbar';

export default function CalculadoraDrywall() {
  const [largura, setLargura] = useState('');
  const [comprimento, setComprimento] = useState('');
  const [orientacao, setOrientacao] = useState('comprimento');
  const [tamanhoPlaca, setTamanhoPlaca] = useState('1.20x1.80');
  const [usarMetragem, setUsarMetragem] = useState(false);
  const [metragemQuadrada, setMetragemQuadrada] = useState('');
  const [resultado, setResultado] = useState(null);

  function calcularMateriais(larguraTeto, comprimentoTeto, orientacao, tamanhoPlaca, metragemManual = null) {
    const placas = {
      '1.20x1.80': { largura: 1.20, comprimento: 1.80, area: 2.16 },
      '1.20x2.40': { largura: 1.20, comprimento: 2.40, area: 2.88 }
    };
    const areaPorPlaca = placas[tamanhoPlaca].area;

    // Modo metragem manual
    if (metragemManual !== null) {
      const m2 = parseFloat(metragemManual);
      const placaCount = Math.ceil(m2 / areaPorPlaca);
      // Assumindo forma quadrada para cálculo de perímetro
      const lado = Math.sqrt(m2);
      const perimetro = 4 * lado;

      const totalCantoneira = Math.ceil(perimetro / 3.0);
      const totalF530 = Math.ceil((lado / 0.60) * (lado / 3.0));
      const totalReguladores = totalF530 * 3;
      const totalParafusosGn = placaCount * 33;
      const totalParafusosMetal = totalF530 * 4;
      const totalMassa = placaCount * 1.5;
      const totalFitaTelada = placaCount * 5;

      return {
        totalPlacas: placaCount,
        totalCantoneira,
        totalF530,
        totalReguladores,
        totalParafusosGn,
        totalParafusosMetal,
        totalMassa,
        totalFitaTelada
      };
    }

    // Modo dimensões abertas
    const totalPlacas = Math.ceil((larguraTeto * comprimentoTeto) / areaPorPlaca);
    const totalCantoneira = Math.ceil(((larguraTeto + comprimentoTeto) * 2) / 3.0);
    const totalF530 = Math.ceil((larguraTeto / 0.60) * (comprimentoTeto / 3.0));
    const totalReguladores = totalF530 * 3;
    const totalParafusosGn = totalPlacas * 33;
    const totalParafusosMetal = totalF530 * 4;
    const totalMassa = totalPlacas * 1.5;
    const totalFitaTelada = totalPlacas * 5;

    return {
      totalPlacas,
      totalCantoneira,
      totalF530,
      totalReguladores,
      totalParafusosGn,
      totalParafusosMetal,
      totalMassa,
      totalFitaTelada
    };
  }

  const handleCalcular = () => {
    const larguraNum = parseFloat(largura);
    const comprimentoNum = parseFloat(comprimento);

    if (!usarMetragem) {
      if (!larguraNum || !comprimentoNum) {
        alert('Por favor, insira largura e comprimento válidos.');
        return;
      }
      const res = calcularMateriais(larguraNum, comprimentoNum, orientacao, tamanhoPlaca);
      setResultado(res);
    } else {
      const m2 = parseFloat(metragemQuadrada);
      if (!m2 || m2 <= 0) {
        alert('Insira uma metragem válida.');
        return;
      }
      const res = calcularMateriais(larguraNum, comprimentoNum, orientacao, tamanhoPlaca, m2);
      setResultado(res);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-area-calculator">
        <div className="container-img-form">
          <div className="container-img-parede">
            <img src="/img-teto.png" alt="Teto Drywall" className="drywallImg" />
          </div>

          <div className="container-form-parede">
            <h2 className="title-calculator">Calculadora de Teto de Drywall</h2>

            <label>
              <input
                type="checkbox"
                checked={usarMetragem}
                onChange={() => setUsarMetragem(!usarMetragem)}
              />{' '}
              Usar metragem quadrada direta
            </label>

            {usarMetragem && (
              <>
                <label className="label-parede">Metragem Quadrada Total (m²):</label>
                <input
                  type="number"
                  value={metragemQuadrada}
                  onChange={(e) => setMetragemQuadrada(e.target.value)}
                  step="0.01"
                />
              </>
            )}

            {!usarMetragem && (
              <>
                <label className="label-parede">Largura do Teto (m):</label>
                <input
                  type="number"
                  value={largura}
                  onChange={(e) => setLargura(e.target.value)}
                  step="0.01"
                />

                <label className="label-parede">Comprimento do Teto (m):</label>
                <input
                  type="number"
                  value={comprimento}
                  onChange={(e) => setComprimento(e.target.value)}
                  step="0.01"
                />

                <label className="label-parede">Orientação das Placas:</label>
                <select value={orientacao} onChange={(e) => setOrientacao(e.target.value)}>
                  <option value="comprimento">Maior lado no Comprimento</option>
                  <option value="largura">Maior lado na Largura</option>
                </select>
              </>
            )}

            <label className="label-parede">Tamanho das Placas:</label>
            <select value={tamanhoPlaca} onChange={(e) => setTamanhoPlaca(e.target.value)}>
              <option value="1.20x1.80">1.20m x 1.80m</option>
              <option value="1.20x2.40">1.20m x 2.40m</option>
            </select>

            <button onClick={handleCalcular} className="btn-calcular">
              Calcular
            </button>
          </div>
        </div>

        {resultado && (
          <div className="resultado">
            <p>Placas: <strong>{resultado.totalPlacas}</strong></p>
            <p>Cantoneiras: <strong>{resultado.totalCantoneira}</strong></p>
            <p>Perfis F530: <strong>{resultado.totalF530}</strong></p>
            <p>Reguladores e tirantes: <strong>{resultado.totalReguladores}</strong></p>
            <p>Parafusos Gn25: <strong>{resultado.totalParafusosGn}</strong></p>
            <p>Parafusos Metal: <strong>{resultado.totalParafusosMetal}</strong></p>
            <p>Massa (kg): <strong>{resultado.totalMassa}</strong></p>
            <p>Fita Telada (m): <strong>{resultado.totalFitaTelada}</strong></p>
          </div>
        )}
      </div>
    </>
  );
}
