import { useState, useEffect, useRef } from 'react';

export function SorteioCard({ onSortear, loading, ultimo, erro }) {
  const [faixaMin, setFaixaMin] = useState(1);
  const [faixaMax, setFaixaMax] = useState(10000);
  const [display, setDisplay] = useState(null);
  const intervalRef = useRef(null);

  // Animação de rolagem de números
  useEffect(() => {
    if (loading) {
      intervalRef.current = setInterval(() => {
        setDisplay(Math.floor(Math.random() * 10000) + 1);
      }, 60);
    } else {
      clearInterval(intervalRef.current);
      if (ultimo) setDisplay(ultimo.numero);
    }
    return () => clearInterval(intervalRef.current);
  }, [loading, ultimo]);

  function handleSortear() {
    const min = Number(faixaMin);
    const max = Number(faixaMax);
    onSortear(min, max);
  }

  return (
    <div className="card">
      <p className="label">número sorteado</p>

      <div className={`numero-display ${loading ? 'rolando' : ultimo ? 'revelado' : 'vazio'}`}>
        {display !== null ? display.toLocaleString('pt-BR') : '—'}
      </div>

      {erro && <div className="erro">{erro}</div>}

      <div className="faixa-form">
        <div className="faixa-grupo">
          <label htmlFor="min">de</label>
          <input
            id="min"
            type="number"
            min="1"
            max="9999"
            value={faixaMin}
            onChange={(e) => setFaixaMin(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="faixa-grupo">
          <label htmlFor="max">até</label>
          <input
            id="max"
            type="number"
            min="2"
            max="10000"
            value={faixaMax}
            onChange={(e) => setFaixaMax(e.target.value)}
            disabled={loading}
          />
        </div>
      </div>

      <button
        className={`btn-sortear ${loading ? 'carregando' : ''}`}
        onClick={handleSortear}
        disabled={loading}
      >
        {loading ? 'Sorteando...' : 'Sortear'}
      </button>
    </div>
  );
}
