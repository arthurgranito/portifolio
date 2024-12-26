import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";

export const HERO_CONTENT = `Sou um desenvolvedor front end apaixonado, com talento para criar aplicações web robustas e escaláveis. Com formação no curso técnico profissionalizante da Tech4me, aprimorei minhas habilidades em tecnologias front-end como HTML5, CSS3, Bootstrap, TailwindCSS, JavaScript, React, Git e Github. Meu objetivo é aproveitar minha experiência para criar soluções inovadoras que impulsionem o crescimento dos negócios e proporcionem experiências excepcionais ao usuário.`;

export const ABOUT_TEXT = `Sou um desenvolvedor front end dedicado e versátil, apaixonado por criar aplicações web eficientes e fáceis de usar. Me especializei em tecnologias diversas incluindo HTML5, CSS3, Bootstrap, TailwindCSS, JavaScript, React, Git e Github. Minha jornada no desenvolvimento web começou com uma profunda curiosidade sobre como as coisas funcionam e evoluiu para uma carreira onde me esforço continuamente para aprender e me adaptar a novos desafios. Eu prospero em ambientes colaborativos e gosto de resolver problemas complexos para entregar soluções de alta qualidade. Fora da programação, gosto de permanecer ativo, explorar novas tecnologias e contribuir para projetos de código aberto.`;

export const PROJECTS = [
  {
    title: "Copokent - Delivery de Bebidas",
    image: project1,
    link: "https://copokent.vercel.app",
    description:
      "Um site de delivery de bebidas totalmente funcional e ativo na cidade de Teresópolis. Com recursos como lista de produtos, carrinho de compras e redirecionamento para o whatsapp da empresa para finalização do pedido.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
  },
  {
    title: "App de para gerenciar uma lista de taferas",
    image: project2,
    link: "https://listatarefas-sepia.vercel.app",
    description:
      "Um aplicativo para gerenciamento de tarefas e projetos, com recursos como criação de tarefas, opção de completar e de deletar a tarefa e o uso do LocalStorage para as informações ficarem salvas no dispositivo do usuário",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Site de Filmes e Séries",
    image: project3,
    link: "https://arthurflix-nine.vercel.app",
    description:
      "Um site que consome uma API externa onde é possível pesquisar por filmes ou séries e acessar seus detalhes como descrição, tempo de duração, ano de lanaçamento e muito mais.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "App de Notas",
    image: project4,
    link: "https://arthurnotes.vercel.app",
    description:
      "Uma aplicação de notas, onde é possível criar notas, editá-las, fixá-las e muito mais. Uso do LocalStorage para que as informações fiquem salvas no dispositivo do usuário.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "App de editor de texto",
    image: project5,
    link: "https://editor-texto-ten.vercel.app",
    description:
      "Uma aplicação de edição de texto, onde é possível digitar um texto com diferentes cores, fontes e tamanhos.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "App de previsão do tempo",
    image: project6,
    link: "https://previsao-tempo-khaki.vercel.app",
    description:
      "Uma aplicação de previsão do tempo onde o usuário digita a cidade desejada e é exibido na tela diversas informações sobre o tempo na região determinada. A exibição das informações é feita a partir de uma API externa.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Gerador de QR Code",
    image: project7,
    link: "https://arthurqrcode.vercel.app",
    description:
      "Uma aplicação que gera QR Codes a partir de links ou textos. A aplicação possui a opção de baixar a imagem do QR Code, assim como permite editar o tamanho da imagem.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Teresópolis, Rio de Janeiro - Brasil",
  phoneNo: "+55 ( 21 ) 97631-8326",
  email: "arthurgranito01@gmail.com",
};
