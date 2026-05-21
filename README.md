# BSB Soluções Elétricas - Website Premium & Cookbook de Engenharia

Este repositório contém o website oficial e interativo de altíssimo padrão da **BSB Soluções Elétricas** (Brasília - DF). O projeto foi construído sob uma arquitetura puramente estática e otimizada, inspirada no layout técnico e limpo do *Claude Cookbook* desenvolvido pela Anthropic.

---

## 🎨 Conceito Visual & Design System

O design do site foi estruturado para refletir a precisão da engenharia e a sofisticação da iluminação cênica de elite:
* **Tema Escuro (Deep Matte Black)**: Base em `#0A0A0C` para passar sofisticação, contraste estético de alto nível e sensação moderna.
* **Amarelo Elétrico/Ouro**: Destaques em `#FFC800` representando energia de alta fidelidade cromática e calor.
* **Glassmorphism**: Aplicação de efeitos de vidro fosco (`backdrop-filter: blur(16px); background: rgba(22, 22, 26, 0.75);`) com bordas douradas sutis nos painéis de comando e cartões de receitas.
* **Logotipo Vetorial (SVG)**: O logotipo da empresa foi recriado em código vetorial (SVG inline), garantindo carregamento instantâneo de 0ms e nitidez infinita em monitores Retina, 4K e dispositivos móveis.
* **Micro-animações**: Efeitos de pulsação luminosa (efeito corona), transições hover fluidas e rotação tridimensional sutil no painel de comando do Hero.

---

## ⚡ Principais Funcionalidades

### 1. O "Cookbook" de Engenharia Elétrica (Catálogo de Soluções)
Ao invés de uma lista estática de serviços, os atendimentos da BSB são expostos como **"Receitas de Engenharia Elétrica"**. Cada item detalha passo a passo:
* **Desafio / Sintoma**: Causa e efeitos do problema que incomoda o cliente.
* **Ingredientes**: Os materiais premium certificados utilizados (Schneider Electric, Siemens, Clamper, Prysmian, Wago).
* **Modo de Preparo**: Instruções técnicas em estrita conformidade com a normativa **NBR 5410 da ABNT**.
* **Mídias Reais**: Fotos e vídeos originais capturados em campo mostrando a perfeição do acabamento.

As 8 receitas inclusas cobrem:
* **Retrofit de Iluminação Cênica & Dimerização LED**
* **Dimensionamento & Montagem de Quadro de Distribuição (QDC)**
* **Instalação, Homologação & Remoção de Padrão (CEB/Neoenergia)**
* **Retrofit de Proteção Pessoal (Troca de Disjuntores NEMA para DIN & DR)**
* **Substituição de Cabos Alimentadores (Troca de Ramal de Entrada)**
* **Fiação Dedicada para Chuveiro (Troca de Fiação c/ Conector Wago)**
* **Malha de Aterramento dedicado & Proteção contra Surtos (DPS)**
* **Diagnóstico Termográfico Preditivo com Câmera Térmica FLIR**

### 2. Simulador de Diagnóstico Elétrico Interativo
Uma ferramenta de triagem interativa para que o cliente realize um pré-diagnóstico rápido do imóvel. Ao selecionar o sintoma (ex: disjuntor caindo, tomadas quentes), o simulador:
1. Executa um console interativo de hacking de engenharia rodando logs normativos em tempo real.
2. Identifica a provável causa física (efeito Joule, fuga de neutro, etc.).
3. Aponta o item exato da **NBR 5410** violado.
4. Sugere a **Receita BSB** ideal para a correção e gera um botão dinâmico para WhatsApp.

### 3. Galeria Dinâmica & Lightbox Integrado
Exibição premium das fotos e vídeos de trabalhos reais do Adão. Conta com:
* **Auto-play dinâmico** silencioso nos vídeos ao passar o mouse.
* **Lightbox customizado**: Ampliação de imagem em tela cheia com navegação por setas laterais ou teclado físico (Esc para fechar, Setas para navegar).

---

## 🛠️ Tecnologias Utilizadas

Para garantir performance máxima (loading score de 100 no Lighthouse) e facilidade extrema de hospedagem, o projeto foi desenvolvido com tecnologias nativas sem frameworks pesados:
* **HTML5 Semântico**: Estrutura robusta e acessível.
* **CSS3 Vanilla**: Estilização flexível, animações otimizadas com aceleração de GPU (`transform`, `opacity`) e design responsivo (Mobile-First).
* **JavaScript ES6+**: Motor leve para controle de filtros, modais de receitas, lógica de estado do simulador e lightbox.

---

## 🚀 Como Executar Localmente

Como o projeto é puramente estático, não há necessidade de compiladores ou instaladores de dependências (Zero Node.js dependency):
1. Clone este repositório:
   ```bash
   git clone https://github.com/KrayKrazy/bsbeletrica.git
   ```
2. Abra a pasta do projeto:
   ```bash
   cd bsbeletrica
   ```
3. Dê duplo clique no arquivo `index.html` ou abra-o diretamente no navegador.

---

## 📞 Suporte Técnico BSB
* **Engenheiro Responsável**: Adão
* **WhatsApp**: +55 (61) 99697-6564
* **Área de Cobertura**: Distrito Federal e Entorno (Lago Sul, Lago Norte, Noroeste, Sudoeste, Park Way, Planaltina, Sobradinho, Águas Claras).
