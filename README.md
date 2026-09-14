# RJT Consultoria — Landing Page de Diagnóstico Empresarial

Landing page de captação de leads para a RJT Consultoria Empresarial.

**URL de produção:** `https://diagnostico.rjtconsultoria.com.br`

## Estrutura

```
rjt-diagnostico/
├── index.html                    # Página principal (56KB)
├── assets/
│   ├── css/style.css             # Estilos + @font-face (11KB)
│   ├── js/main.js                # JS vanilla — menu, modal, form (4KB)
│   ├── fonts/                    # Libre Franklin woff2 (5 arquivos, 100KB)
│   └── images/
│       ├── logo-rjt.png          # Logo header (120KB)
│       └── logo-rjt-branco.png   # Logo footer (112KB)
└── README.md
```

**Peso total:** ~300KB (sem framework, sem dependências externas)

## Origem

Convertida de um bundle Claude Designer (HTML com dc-runtime + React, ~330KB de framework) para HTML/CSS/JS vanilla puro. Zero dependências externas.

## Seções da página

| Âncora        | Conteúdo                                                |
|---------------|---------------------------------------------------------|
| `#inicio`     | Hero — headline, CTA principal                          |
| `#dores`      | 10 cards de dores empresariais                          |
| `#solucoes`   | 3 frentes: Processos, Qualidade/ISO, Automação          |
| `#sobre`      | Situação atual vs. desejada + método 9 etapas           |
| `#avaliacao`  | Formulário de captação (6 campos + consentimento)       |
| `#diagnostico`| Maturidade empresarial + modal detalhado                |
| `#conteudos`  | Banner CTA para conteúdos                               |
| `#contato`    | Footer com dados de contato                             |

## Funcionalidades JS

- **Menu mobile** — burger toggle a 980px, fecha ao clicar link ou Escape
- **Back-to-top** — aparece após scroll > 600px
- **Modal** — diagnóstico de maturidade, abre/fecha com botão, backdrop ou Escape
- **Validação de formulário** — campos obrigatórios com feedback visual
- **Formulário** — atualmente em fase de integração (não envia dados)

## Responsividade

Breakpoint principal: **980px** (mobile ↔ desktop)

- Desktop: nav horizontal com links
- Mobile: burger menu com overlay

## Fontes

Libre Franklin (self-hosted, woff2), pesos 400–800, 5 unicode ranges.

## Deploy

Site estático — deploy direto no Vercel sem build step.

### Vercel

```bash
# Instalar Vercel CLI (se necessário)
npm i -g vercel

# Na raiz do projeto
vercel --prod
```

O projeto no Vercel é **rjt-diagnostico** (separado do site principal rjt-consultoria-empresarial).

### DNS (Hostinger)

Adicionar um registro CNAME:

| Tipo   | Nome          | Valor                    | TTL  |
|--------|---------------|--------------------------|------|
| CNAME  | diagnostico   | cname.vercel-dns.com.    | 3600 |

**⚠️ NÃO alterar nameservers, registros do domínio principal ou qualquer configuração existente.**

## Futuras campanhas

Estrutura preparada para páginas adicionais:

```
/processos   → foco em melhoria de processos
/iso9001     → foco em certificação ISO
/industria   → foco em operações industriais
/pcp         → foco em PCP/MRP
```

## Dados de contato

- **Telefone/WhatsApp:** +55 19 99805-2374
- **E-mail:** contato@rjtconsultoria.com.br
- **Site principal:** https://rjtconsultoria.com.br
- **LinkedIn:** https://www.linkedin.com/company/rjt-consultoriaemqualidade
- **Instagram:** https://www.instagram.com/rjtrogerioconsultoria
- **Endereço:** Rua Capiberibe, 188, Vila Dainese, Americana - SP

## Licença

Proprietário — RJT Consultoria Empresarial. Todos os direitos reservados.
