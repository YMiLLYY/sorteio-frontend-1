const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Erro ${res.status}`);
  }

  if (res.status === 204) return null;
  return res.json();
}

export const api = {
  sortear: (faixa_min, faixa_max) =>
    request('/api/sorteios', {
      method: 'POST',
      body: JSON.stringify({ faixa_min, faixa_max }),
    }),

  listar: () => request('/api/sorteios'),

  remover: (id) => request(`/api/sorteios/${id}`, { method: 'DELETE' }),

  limpar: () => request('/api/sorteios', { method: 'DELETE' }),
};
