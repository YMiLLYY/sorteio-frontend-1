import { useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';

export function useSorteio() {
  const [historico, setHistorico] = useState([]);
  const [ultimo, setUltimo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingHistorico, setLoadingHistorico] = useState(true);
  const [erro, setErro] = useState(null);

  const carregarHistorico = useCallback(async () => {
    setLoadingHistorico(true);
    setErro(null);
    try {
      const res = await api.listar();
      setHistorico(res.data);
    } catch (e) {
      setErro(e.message);
    } finally {
      setLoadingHistorico(false);
    }
  }, []);

  useEffect(() => {
    carregarHistorico();
  }, [carregarHistorico]);

  const sortear = useCallback(async (faixa_min, faixa_max) => {
    setLoading(true);
    setErro(null);
    try {
      const res = await api.sortear(faixa_min, faixa_max);
      setUltimo(res.data);
      setHistorico((prev) => [res.data, ...prev]);
    } catch (e) {
      setErro(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const remover = useCallback(async (id) => {
    try {
      await api.remover(id);
      setHistorico((prev) => prev.filter((s) => s.id !== id));
      if (ultimo?.id === id) setUltimo(null);
    } catch (e) {
      setErro(e.message);
    }
  }, [ultimo]);

  const limpar = useCallback(async () => {
    try {
      await api.limpar();
      setHistorico([]);
      setUltimo(null);
    } catch (e) {
      setErro(e.message);
    }
  }, []);

  return {
    historico,
    ultimo,
    loading,
    loadingHistorico,
    erro,
    sortear,
    remover,
    limpar,
  };
}
