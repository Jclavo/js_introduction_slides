# Workshop de JavaScript — Roteiro do Dia 1

Um guia de apresentação para quem vai conduzir o `index.html`. A duração
total é pensada para aproximadamente **3–3,5 horas**, incluindo os
momentos práticos, com pontos de pausa naturais marcados abaixo. Os
tempos são uma referência, não uma obrigação rígida — deixe que os
momentos de feedback (slide 16, e os momentos de dupla/desafio) ajustem
o ritmo de verdade.

Abra o `index.html` em qualquer navegador moderno antes do encontro
começar e passe por todos os slides uma vez, para confirmar que os
exemplos de código funcionam na rede/configuração da sala (eles não
precisam de acesso à internet depois que as fontes carregarem).

---

## Antes de começar

- Confirme que cada participante consegue abrir o `index.html`
  localmente (não precisa de servidor — é só HTML/CSS/JS puro).
- Peça para cada pessoa abrir o console do navegador uma vez, ao vivo,
  antes do slide 1 — metade do atrito de "configuração" desaparece se
  isso acontecer cedo.
- Mostre o botão de índice de slides (canto superior direito, ícone de
  menu) — ele permite que você ou um participante pule direto para
  qualquer slide se surgir uma pergunta fora de ordem.

---

## Slide 1 — Capa (1 min)

Preencha a data e o(s) nome(s) do(s) instrutor(es) antes do encontro
(são dois textos de espaço reservado na própria capa). Deixe claro que
este é o Dia 1 de 5.

## Slide 2 — Boas-vindas (2 min)

Diga o que o workshop *é* e o que *não é*: uma introdução do zero, não
um workshop de frameworks ou de React. Aponte que todo bloco de código
com um botão "Executar" é ao vivo &mdash; os participantes vão digitar
diretamente nos slides o dia inteiro, não só observar.

## Slide 3 — Agenda do Dia 1 (3 min)

Leia os cinco blocos em voz alta, mas passe mais tempo no card de
**objetivos de aprendizagem** do que no card de agenda &mdash; os
objetivos são o que os participantes vão conseguir verificar sozinhos
ao final do dia.

## Slide 4 — Como vamos trabalhar (3 min)

Apresente os quatro tipos de destaque uma vez, com clareza, para não
precisar explicá-los de novo quando aparecerem depois. Também é um bom
momento para combinar as duplas, se o espaço permitir.

**Transição:** "Com isso combinado — o que é, de fato, o JavaScript?"

---

## Bloco 1 — O que é JavaScript? (~20 min)

### Slide 5 — Uma linguagem criada em dez dias

A história do nome Mocha → LiveScript → JavaScript costuma arrancar uma
risada e deixa claro que "JavaScript" e "Java" não têm relação técnica
&mdash; uma confusão bastante comum.

### Slide 6 — Um exemplo rápido do que ele faz

Rode o exemplo ao vivo antes de deixar os participantes mexerem. Não se
prenda à sintaxe do `if` (isso vem no Dia 2) &mdash; o objetivo aqui é só
mostrar o JavaScript "decidindo" algo sozinho. Deixe as pessoas mudarem
o valor de `idade` e testarem.

### Slide 7 — Onde o JavaScript é executado

Mantenha breve, já que o foco do dia é navegador: o objetivo é só que os
participantes entendam *por que* o Node.js é opcional hoje, não um
tutorial de Node.js. Use o destaque de mundo real (botão de checkout vs.
processamento de pagamento) para conectar a divisão navegador/servidor
com algo que já vivenciaram como usuários.

**Ponto de pausa:** este é um bom momento para 5 minutos de intervalo
antes da configuração.

---

## Bloco 2 — Configuração do ambiente (~20 min)

### Slide 8 — O que você precisa na sua máquina

Mostre ao vivo como abrir as ferramentas de desenvolvedor (F12 /
Cmd+Option+I) em vez de só ler o atalho no slide. Se alguém precisar
instalar o VS Code ou o Node.js, este é o momento &mdash; não deixe isso
vazar para os blocos seguintes.

### Slide 9 — Verifique e teste (programação em dupla)

Este é o primeiro momento prático e o primeiro destaque de dupla. Reserve
de 5 a 8 minutos mesmo a tarefa sendo pequena &mdash; o objetivo é
familiaridade com o botão Executar e o console, não o código em si.
Circule pela sala enquanto as duplas trabalham.

**Momento de feedback:** peça uma contagem rápida de mãos &mdash; "quem
teve uma saída sem erro, quem teve erro?" &mdash; antes de seguir.
Erros aqui são um bom sinal de que as pessoas estão de fato
experimentando.

---

## Bloco 3 — Primeiros passos (~15 min)

### Slide 10 — Hello World

Rode as duas linhas de `console.log` ao vivo antes de deixar os
participantes editá-las. Reforce que `console.log` é a ferramenta que
eles vão usar o tempo todo pelo resto do workshop (e depois dele) para
ver o que o código está fazendo.

### Slide 11 — Vinculando um script

Este slide é mais leitura do que digitação &mdash; o trecho de HTML não
está em um editor ao vivo porque precisa de um arquivo real e uma tag
`<script>` para funcionar de verdade. Se der tempo, peça para os
participantes criarem `index.html` + `script.js` na própria máquina em
vez de só lerem o slide.

**Ponto de pausa:** bom momento para um intervalo mais longo (10–15
min) antes da sintaxe.

---

## Bloco 4 — Sintaxe básica (~25 min)

### Slide 12 — Variáveis e tipos

Rode o código inicial como está, depois altere um valor ao vivo (por
exemplo, `numeroDeParticipantes`) e rode de novo, para que os
participantes vejam que editar + rodar de novo é todo o fluxo de
trabalho. Explique `const` vs. `let` vs. `var` como uma regra rápida de
decisão: "use `const` por padrão; troque para `let` assim que precisar
reatribuir."

### Slide 13 — Operadores

A diferença entre `===` e `==` vale a pena ser explicada com calma
&mdash; é uma das fontes mais comuns de bugs para iniciantes. Rode o par
`"17" === 17` / `"17" == 17` especificamente e peça para a turma prever
o resultado antes de clicar em Executar.

---

## Bloco 5 — Operadores aritméticos (~20 min)

### Slide 14 — Fazendo contas em JavaScript

Rode cada linha uma de cada vez na primeira passada, em vez de todas de
uma vez &mdash; pare especificamente nas linhas de `"10" + 4`, já que a
concatenação de strings vs. a soma numérica é a pergunta de "pegadinha"
mais comum que você vai receber. O destaque de desafio opcional (dividir
uma turma de 30 em grupos de 4) é uma boa forma de encerrar o bloco para
quem quiser ir além.

### Slide 15 — Atalhos (destaque de mundo real)

Apresente `+=`, `-=`, `++`, `--` como *abreviações*, não conceitos novos
&mdash; eles fazem exatamente a mesma coisa que a forma completa
`x = x + 1`. O destaque de mundo real (carrinho de compras, pontuação,
contador de visualizações) ajuda isso a fazer sentido como algo que já
viram como usuários.

---

## Slide 16 — Encerramento do Dia 1 (10 min)

Leia a lista de recapitulação em voz alta e pare de fato em cada item
&mdash; funciona também como uma checagem final de "todo mundo reconhece
isso". Encerre com o momento de feedback: peça uma nota de confiança de
1 a 5 (mãos levantadas ou no chat que a sala estiver usando) antes de
encerrar o encontro. Use esse número para decidir se o Dia 2 começa
revisando o Dia 1 ou já parte direto para condicionais e funções.

---

## Referência rápida: slide → bloco

| Slide | Título | Bloco |
|---|---|---|
| 1 | Introdução ao JavaScript (capa) | — |
| 2 | Boas-vindas | — |
| 3 | Agenda do Dia 1 | — |
| 4 | Como vamos trabalhar | — |
| 5 | O que é JavaScript? | 1. O que é JavaScript? |
| 6 | O que é JavaScript? (Exemplo) | 1. O que é JavaScript? |
| 7 | Onde o JavaScript é executado | 1. O que é JavaScript? |
| 8 | Configuração do ambiente | 2. Configuração do ambiente |
| 9 | Configuração: verifique e teste | 2. Configuração do ambiente |
| 10 | Primeiros passos: Hello World | 3. Primeiros passos |
| 11 | Primeiros passos: vinculando um script | 3. Primeiros passos |
| 12 | Sintaxe básica: variáveis e tipos | 4. Sintaxe básica |
| 13 | Sintaxe básica: operadores | 4. Sintaxe básica |
| 14 | Operadores aritméticos | 5. Operadores aritméticos |
| 15 | Operadores aritméticos: atalhos | 5. Operadores aritméticos |
| 16 | Encerramento do Dia 1 | — |

---

## Notas de acessibilidade (WCAG 2.x, nível AA)

O material foi revisado e ajustado seguindo os quatro princípios do
WCAG — perceptível, operável, compreensível, robusto. Vale saber como
facilitador(a):

- **Leitores de tela anunciam a troca de slide automaticamente** (uma
  região `aria-live` informa "Slide 6 de 16: Configuração do ambiente"
  a cada clique em Anterior/Próximo/índice) sem tirar o foco do
  teclado dos botões de navegação.
- **Todo texto atende a um contraste mínimo de 4,5:1** contra o fundo
  (verificado numericamente).
- **Todo controle interativo tem no mínimo 44×44px** (botão de menu,
  Executar/Reiniciar, Anterior/Próximo, itens do índice de slides) para
  participantes que usam algum dispositivo assistivo, ponteiro de
  cabeça, ou têm tremores/condições motoras.
- **O painel de índice de slides é um diálogo modal de verdade**: ao
  abrir, o foco de teclado fica preso dentro dele; Esc ou o botão ✕
  fecham e devolvem o foco ao botão que abriu.
- **Os destaques nunca dependem só de cor**: cada um dos quatro tipos
  (mundo real, dupla, desafio, feedback) também tem um ícone
  diferente e um título em texto.
- Se você for apresentar para um grupo que inclua pessoas usuárias de
  tecnologia assistiva, vale um comentário de 30 segundos no início:
  "este material funciona só com o teclado — as setas movem entre os
  slides, Tab move entre os controles do slide atual."
- **Um painel de acessibilidade** (botão "Aa" na barra superior, ao lado
  do índice de slides) deixa cada participante ajustar o tamanho do
  texto (85% a 200%) e trocar o esquema de cores &mdash; incluindo uma
  opção de alto contraste e uma opção pensada para daltonismo
  vermelho-verde. Vale mencionar esse botão no início do encontro, já
  que a preferência de cada pessoa fica salva no navegador dela.
