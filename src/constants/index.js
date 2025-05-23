import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";

export const HERO_CONTENT = `Hi there! I'm a Full Stack Developer passionate about turning ideas into efficient digital solutions.
On the frontend, I work with modern technologies like React, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, shadcn/ui, and Framer Motion, crafting responsive, accessible, and user-friendly interfaces.
On the backend, I use Java with Spring Boot, JPA, Hibernate, H2, MySQL, and PostgreSQL to build robust and scalable RESTful APIs, always focusing on performance and clean architecture.
I'm also experienced with DevOps tools and practices such as Docker, Git, GitHub, and CI/CD, ensuring fast and reliable deployments.
Additionally, I have solid knowledge of C# and .NET, which adds to my versatility across different tech stacks.`;

export const ABOUT_TEXT_1 = `I'm a dedicated and versatile Full Stack Developer, passionate about building efficient and user-friendly web applications. I specialize in a wide range of technologies including HTML5, CSS3, JavaScript, React, Tailwind CSS, Bootstrap, shadcn/ui, and Framer Motion on the frontend.`;

export const ABOUT_TEXT_2 = `On the backend, I work with Java, Spring Boot, JPA, Hibernate, H2, MySQL, and PostgreSQL, building robust RESTful APIs and scalable systems. I also have hands-on experience with DevOps tools such as Docker, Git, GitHub, and CI/CD pipelines to ensure seamless integration and deployment workflows. In addition, I have solid knowledge of C# and .NET, expanding my flexibility across different tech stacks.`;

export const ABOUT_TEXT_3 = `My journey in development started with a deep curiosity about how things work, and has evolved into a career where I constantly strive to learn, grow, and tackle new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const ABOUT_TEXT_4 = `Outside of coding, I enjoy staying active, exploring emerging technologies, and contributing to open-source projects.`

export const PROJECTS = [
  {
    title: "Copokent - Drink Delivery",
    image: project1,
    linkDeploy: "https://copokent.vercel.app",
    linkGithub: "https://github.com/arthurgranito/copokent.git",
    description:
      "Um site de delivery de bebidas totalmente funcional e ativo na cidade de Teresópolis. Com recursos como lista de produtos, carrinho de compras e redirecionamento para o whatsapp da empresa para finalização do pedido.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
  },
  {
    title: "To do list API",
    image: project2,
    linkGithub: "https://github.com/arthurgranito/todo-listAPI.git",
    description:
      "A restFul API that manages tasks, having endpoints and methods to register a task, edit it, delete it and complete it. with full CRUD.",
    technologies: ["Java", "SpringBoot", "JPA and Hibernate", "PostgreSQL"],
  },
  {
    title: "CineVerse - Film and Series Website",
    image: project3,
    linkDeploy: "https://cineverse-zeta.vercel.app",
    linkGithub: "https://github.com/arthurgranito/cine-verse.git",
    description:
      "A website that consumes an external API where it is possible to search for films or series and access their details, such as description, running time, release year and much more.",
    technologies: ["Vue.js", "CSS", "JavaScript"],
  },
  {
    title: "Complete API Product x Customer",
    image: project4,
    linkGithub: "https://github.com/arthurgranito/project-springboot-jpa-hibernate.git",
    description:
      "An API that uses different P.O.O concepts, OneToMany, ManyToMany, ManyToOne relationships. Furthermore, use of JPA, Hibernate, Spring boot and other technologies",
    technologies: ["Java", "SpringBoot", "JPA and Hibernate", "MySQL"],
  },
  {
    title: "Gestor Pro",
    image: project5,
    linkDeploy: "https://gestorpro-kappa.vercel.app",
    linkGithub: "https://github.com/arthurgranito/gestor-pro-gestao-financeira.git",
    description:
      "A full stack application using Firebase, where a company is managed, controlling its expenses, revenues and employee data",
    technologies: ["React", "Shadcn/ui", "JavaScript", "Firebase", "Chart.js"],
  },
  {
    title: "Weather Forecast",
    image: project6,
    linkDeploy: "https://previsao-tempo-khaki.vercel.app",
    linkGithub: "https://github.com/arthurgranito/previsao-tempo.git",
    description:
      "a website that uses an external weather forecast API, where the user searches for a city and the website returns weather forecast information for that location in real time",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "QR Code Generator",
    image: project7,
    linkDeploy: "https://arthurqrcode.vercel.app",
    linkGithub: "https://github.com/arthurgranito/gerador-qr-code.git",
    description:
      "An application that generates QR Codes from links or texts. The application has the option to download the QR Code image, as well as allowing you to edit the image size.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Teresópolis, Rio de Janeiro - Brazil",
  phoneNo: "+55 (21) 97631-8326",
  email: "arthurgranitodev@gmail.com",
};
