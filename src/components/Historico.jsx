export function Historico({ historico, loading, onRemover, onLimpar }) {
  if (loading) {
    return (
      <div className="historico">
        <p className="historico-vazio">Carregando histórico...</p>
      </div>
    );
  }

  if (historico.length === 0) {
    return (
      <div className="historico">
        <p className="historico-vazio">
          Nenhum sorteio ainda. Sorteie um número acima!
        </p>
      </div>
    );
  }

  return (
    <div className="historico">
      <div className="historico-header">
        <h2 className="historico-titulo">Histórico</h2>
        <button className="btn-limpar" onClick={onLimpar}>
          Limpar tudo
        </button>
      </div>

      <ul className="historico-lista">
        {historico.map((s) => (
          <li key={s.id} className="historico-item">
            <div className="historico-numero">
              {Number(s.numero).toLocaleString('pt-BR')}
            </div>
            <div className="historico-meta">
              <span className="historico-faixa">
                {s.faixa_min} – {s.faixa_max}
              </span>
              <span className="historico-data">
                {new Date(s.created_at).toLocaleString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
            <button
              className="btn-remover"
              onClick={() => onRemover(s.id)}
              aria-label="Remover sorteio"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
