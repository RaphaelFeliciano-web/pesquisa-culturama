import React from 'react';

// Componente para exibir cada resposta individualmente
// O componente recebe "props" (propriedades), que aqui chamamos de "dado"
const CardResposta = ({ dado }) => {
  
  // 1. A lógica de exibição fica dentro do componente, antes do return
  const sexoExibido = (dado.sexo === 'Outro' || dado.sexo === 'O') 
    ? `${dado.sexo} (${dado.outroSexo})` 
    : dado.sexo;

  let interessesFormatados = dado.interesse;
  if (Array.isArray(dado.interesse)) {
    interessesFormatados = dado.interesse.join(', ');
  }

  // 2. O return contém o JSX (a estrutura visual)
  return (
    <div className="result-card">
      {/* Em React, style é um objeto e usa camelCase (marginTop, não margin-top) */}
      <h3 style={{ marginTop: 0, color: '#1d3557' }}>{dado.userName}</h3>
      
      <p><strong>Idade:</strong> {dado.age} anos</p>
      <p><strong>Estado:</strong> {dado.estado}</p>
      <p><strong>Sexo:</strong> {sexoExibido}</p>
      <p><strong>Interesse:</strong> {interessesFormatados}</p>
      <p><strong>Sugestão:</strong> {dado.sugestoes}</p>
    </div>
  );
};

export default CardResposta;