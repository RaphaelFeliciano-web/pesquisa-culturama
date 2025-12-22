import React, { useState, useEffect } from 'react';
import CardResposta from './CardResposta.jsx';
import { dadosIniciais } from './data.js';
// No seu projeto Vite, importe o CSS aqui: import './App.css';

export default function App() {
  // Estado para armazenar a lista de respostas
  const [respostas, setRespostas] = useState(() => {
    // Tenta carregar os dados do localStorage na inicialização
    const dadosSalvos = localStorage.getItem('culturama-respostas');
    return dadosSalvos ? JSON.parse(dadosSalvos) : dadosIniciais;
  });

  // Efeito para "escutar" quando o formulário HTML enviar um novo dado
  useEffect(() => {
    // Efeito para salvar os dados no localStorage sempre que a lista de respostas mudar
    localStorage.setItem('culturama-respostas', JSON.stringify(respostas));
  }, [respostas]);

  useEffect(() => {
    const adicionarNovaResposta = (event) => {
      const novoDado = event.detail; // O dado vem dentro de 'detail'
      setRespostas((listaAtual) => [novoDado, ...listaAtual]);
    };

    window.addEventListener('add-response', adicionarNovaResposta);

    // Limpeza do evento quando o componente desmontar
    return () => {
      window.removeEventListener('add-response', adicionarNovaResposta);
    };
  }, []);

  return (
    <div className="results-container">
      <h2>Dados Cadastrados (Simulação)</h2>
      {/* Mapeia a lista de dados para componentes CardResposta */}
      {respostas.map((dado) => <CardResposta key={dado.id} dado={dado} />)}
    </div>
  );
}