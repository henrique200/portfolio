export type Project = {
  id: string;
  title: string;
  type: "Mobile" | "Web";
  highlight: string;
  description: string;
  stack: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    type: "Mobile",
    highlight: "Player real + fila + mini player + persistência",
    description:
      "Clone do Spotify em React Native com player real (expo-audio), fila (next/prev), Now Playing bar com animação, Liked Songs e Recent Searches com AsyncStorage.",
    stack: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "expo-av",
      "AsyncStorage",
    ],
    image: "/projects/spotify.png",
    links: {
      github: "https://github.com/henrique200/spotify-clone-expo",
      demo: "",
    },
  },
  {
    id: "horas-trabalhadas",
    title: "Horas Trabalhadas",
    type: "Mobile",
    highlight: "Notas + relatórios + exportação + validações",
    description:
      "App para registrar horas, observações e flags (revisitas/estudos), gerar relatórios mensais e exportar PDF. Formulários com Yup, modais customizados e persistência local.",
    stack: ["React Native", "Expo Router", "TypeScript", "Yup", "AsyncStorage"],
    image: "/projects/horas.png",
    links: {
      github: "https://github.com/henrique200/project_hours_service",
      demo: "",
    },
  },
  {
    id: "pokedex",
    title: "Pokédex (Desafio)",
    type: "Web",
    highlight: "Desafio técnico — Vite + Vanilla + API pública",
    description:
      "Projeto desenvolvido como desafio técnico usando Vite + Vanilla (JS/TS), consumindo API pública. Inclui listagem, busca e página de detalhes, com foco em performance, organização do código e UI responsiva.",
    stack: ["Vite", "Vanilla JS", "TypeScript", "CSS"],
    image: "/projects/pokedex.png",
    links: {
      github: "https://github.com/henrique200/desafio-tecnico-pokedex",
      live: "",
    },
  },
];
