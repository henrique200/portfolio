# Portfólio — José Henrique

Site pessoal/portfólio com foco em apresentação profissional, projetos e contato.

## Visão geral

- Seções: Hero, Projetos, Sobre e Contato
- Layout responsivo e clean
- Cards de projetos com filtro por categoria
- CTA para download do currículo em PDF (robusto com `BASE_URL`)
- Formulário de contato com validação (Yup) e envio via Web3Forms

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- Yup
- Lucide React (ícones)
- Web3Forms (envio do formulário)

## Estrutura

- `src/pages`: seções/páginas (Hero, Projects, About, Contact)
- `src/components`: componentes reutilizáveis (Navbar, Cards, Inputs, etc.)
- `src/data/projects.ts`: dados dos projetos exibidos no site
- `public/cv.pdf`: currículo em PDF
- `public/hero-spotlight.png`: imagem de destaque no Hero
- `public/projects/*`: imagens dos cards de projetos
- `public/me.jpeg`: foto/avatar (Navbar)

## Como rodar localmente

```bash
npm install
npm run dev

Abra no navegador:
http://localhost:5173

Build e Preview:
npm run build
npm run preview

Variáveis de ambiente

Crie um arquivo .env na raiz do projeto:
VITE_WEB3FORMS_KEY=seu_token_aqui


Download do CV (robusto no deploy)

Coloque seu currículo em:
public/cv.pdf

E aponte o link usando BASE_URL, para não quebrar em deploy com subpath:
const base = import.meta.env.BASE_URL;

<a href={`${base}cv.pdf`} download="Jose-Henrique-CV.pdf">
  Baixar CV
</a>


Atualizando conteúdo

Projetos: edite src/data/projects.ts
Currículo: substitua public/cv.pdf
Imagens dos projetos: coloque/substitua em public/projects
Imagem do destaque do Hero: public/hero-spotlight.png
Foto/Avatar: public/me.jpeg

Scripts úteis

npm run dev
npm run build
npm run preview
npm run lint

Deploy
Recomendado: Vercel ou Netlify.

Checklist rápido:

Configure VITE_WEB3FORMS_KEY nas variáveis de ambiente do provedor
Garanta que cv.pdf e imagens estejam dentro de public/
Se o deploy usar subpath, use import.meta.env.BASE_URL para links/arquivos do public

Licença
Uso pessoal. Ajuste conforme necessário.
