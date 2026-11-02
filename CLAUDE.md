# CLAUDE.md — Landing de Diagnóstico RJT

## Contexto (levantado do repositório em 2026-11-02)
- Landing estática: `index.html` + `assets/` (CSS, JS vanilla, fontes woff2, imagens)
- Produção: `https://diagnostico.rjtconsultoria.com.br` — usada em campanhas de anúncio
- Repositório **público**: nada de dado interno, nome de cliente, chave ou URL privada

## Verificações antes de declarar concluído
- Abrir `index.html` localmente e conferir menu, modal e formulário
- Conferir o peso da página e o card de compartilhamento (regras abaixo)
- Nunca inventar resultado de teste; status explícito: IMPLEMENTADO / TESTADO / VALIDADO /
  PENDENTE / BLOQUEADO
- Nunca trabalhar direto na branch padrão: branch temática + PR para revisão

## Padrões de entrega com IA (RJT, 2026-11)
Complementam as regras acima; não substituem nenhuma delas.
- **Indicador vem de uma função, não da tela.** Todo KPI, total ou percentual exibido sai de
  um único ponto do HTML/JS (números e prazos citados na página não se repetem divergentes). Componente só formata; nunca recalcula. Dois lugares mostrando o mesmo número leem
  a mesma função — é o que impede divergência entre painel, relatório e exportação
- **Tela não está pronta só porque compilou.** Antes de declarar concluída uma tela nova ou alterada: abrir a rota
  no navegador (preview do Claude Code ou `npx playwright screenshot`) em 1366px e 390px, nos
  temas existentes, e conferir sobreposição, texto cortado, rótulo cobrindo valor e número
  incoerente com o estado. Corrigir na causa, nunca escondendo. Registrar no PR o que foi conferido
- **Número sem fonte é declarado.** Valor ilustrativo, estimado ou provisório aparece marcado
  na interface e no PR; nunca é apresentado como dado real
- **Página pública é leve.** Cada página abaixo de 1 MB no primeiro carregamento; imagens em
  WebP/AVIF no tamanho de exibição (hero ≤ 300 KB), `loading="lazy"` abaixo da dobra
- **Card de compartilhamento correto.** `og:image` em 1200×630, URL absoluta, `og:title`,
  `og:description` e `og:url` presentes; conferir o card antes de usar o link em anúncio ou post
