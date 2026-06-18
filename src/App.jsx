import { SorteioCard } from './components/SorteioCard';
import { Historico } from './components/Historico';
import { useSorteio } from './hooks/useSorteio';
import './styles.css';

export default function App() {
  const {
    historico,
    ultimo,
    loading,
    loadingHistorico,
    erro,
    sortear,
    remover,
    limpar,
  } = useSorteio();

  return (
    <div className="app">
      <header className="header">
        <span className="header-badge">1 – 10.000</span>
        <h1 className="header-titulo">Sorteio</h1>
        <p className="header-sub">Sorteie um número ao acaso, salve o histórico.</p>
      </header>

      <main className="main">
        <SorteioCard
          onSortear={sortear}
          loading={loading}
          ultimo={ultimo}
          erro={erro}
        />
        <Historico
          historico={historico}
          loading={loadingHistorico}
          onRemover={remover}
          onLimpar={limpar}
        />
      </main>
    </div>
  );
}
