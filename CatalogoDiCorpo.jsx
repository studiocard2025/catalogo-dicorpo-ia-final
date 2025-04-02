
import { useState } from "react";

const quiz = [
  {
    pergunta: "Como você pretende usar suas peças DiCorpo?",
    opcoes: ["Academia", "Trabalho e dia a dia", "Ambos"]
  },
  {
    pergunta: "Qual seu tipo de corpo?",
    opcoes: ["Ampulheta", "Triângulo", "Oval", "Retângulo"]
  },
  {
    pergunta: "Qual estilo te representa melhor?",
    opcoes: ["Clássico", "Moderno", "Minimalista", "Ousado"]
  }
];

const recomendacoes = {
  "Academia:Triângulo:Moderno": ["Top Neo Fit", "Legging Power Shape"],
  "Ambos:Ampulheta:Clássico": ["Macacão Sculpt", "Blusa Soft Lux"]
};

export default function CatalogoDiCorpo() {
  const [respostas, setRespostas] = useState([]);
  const [etapa, setEtapa] = useState(0);

  const selecionar = (resposta) => {
    const novas = [...respostas];
    novas[etapa] = resposta;
    setRespostas(novas);
    if (etapa < quiz.length - 1) {
      setEtapa(etapa + 1);
    }
  };

  const chave = respostas.join(":");
  const sugestoes = recomendacoes[chave];

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif', maxWidth: 600, margin: 'auto' }}>
      <h1>Catálogo Interativo DiCorpo</h1>
      {etapa < quiz.length ? (
        <div>
          <h2>{quiz[etapa].pergunta}</h2>
          {quiz[etapa].opcoes.map((op, idx) => (
            <button
              key={idx}
              style={{ margin: 8, padding: 12, display: 'block', width: '100%' }}
              onClick={() => selecionar(op)}
            >
              {op}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Peças recomendadas pra você:</h2>
          {sugestoes ? (
            <ul>
              {sugestoes.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          ) : (
            <p>Nenhuma recomendação exata — mas temos algo especial pra você. Fale com uma consultora!</p>
          )}
        </div>
      )}
    </div>
  );
}
