import project_25 from "./projectImg/project_25.png";
import project_1 from "./projectImg/project_1.png";
import project_2 from "./projectImg/project_2.png";
import project_3 from "./projectImg/project_3.png";
import project_4 from "./projectImg/project_4.png";
import project_5 from "./projectImg/project_5.png";
import project_6 from "./projectImg/project_6.png";
import project_7 from "./projectImg/project_7.png";
import project_8 from "./projectImg/project_8.png";
import project_9 from "./projectImg/project_9.png";
import project_10 from "./projectImg/project_10.png";
import project_11 from "./projectImg/project_11.png";
import project_12 from "./projectImg/project_12.png";
import project_13 from "./projectImg/project_13.png";
import project_14 from "./projectImg/project_14.png";
import project_15 from "./projectImg/project_15.png";
import project_16 from "./projectImg/project_16.png";
import project_17 from "./projectImg/project_17.png";
import project_18 from "./projectImg/project_18.png";
import project_19 from "./projectImg/project_19.png";
import project_20 from "./projectImg/project_20.png";
import project_21 from "./projectImg/project_21.png";
import project_22 from "./projectImg/project_22.png";
import project_23 from "./projectImg/project_23.png";
import project_24 from "./projectImg/project_24.png";

const skillsList = [
  { title: "Html", value: 75 },
  { title: "CSS", value: 75 },
  { title: "SASS", value: 75 },
  { title: "Javascript", value: 70 },
  { title: "Typescript", value: 70 },
  // { title: "Python", value: 60 },
  // { title: "PHP", value: 60 },
  { title: "Bootstrap", value: 70 },
  { title: "Tailwind CSS", value: 70 },
  { title: "Jquery", value: 70 },
  { title: "React JS", value: 75 },
  // { title: "PWA", value: 75 },
  { title: "React Bootstrap", value: 70 },
  { title: "Material UI", value: 80 },
  { title: "Chakra UI", value: 70 },
  // { title: "Ant Design", value: 70 },
  // { title: "Materialize", value: 70 },
  // { title: "Django", value: 80 },
  { title: "Node JS ", value: 70 },
  { title: "Redux Toolkit ", value: 70 },
  { title: "Express JS", value: 80 },
  { title: "MySQL", value: 70 },
  { title: "MSSQL", value: 70 },
  // { title: "PostgreSQL", value: 70 },
  // { title: "Sqlite", value: 70 },
  { title: "Mongodb", value: 70 },
  // { title: "Heroku", value: 70 },
  { title: "Firebase", value: 70 },
  { title: "Netlify", value: 70 },
  { title: "Git", value: 70 },
  { title: "Linux", value: 70 },
  { title: "Vercel", value: 70 },
  { title: "Gitlab", value: 70 },
];
const projectList = [
  {
    id: 1,
    title: "Finance Tracker",
    desc: "Record Income & Revenue.",
    technologies: ["React", "Express", "Node","Tailwind","MongoDB"],
    frontImage: project_25,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://finance-system-frontend-xi.vercel.app",
    repoLink: "https://github.com/usaid-anxari/Finance-System",
  },
  {
    id: 2,
    title: "Case Converter",
    desc: "Case Converter to convert to upper and lower case and count the number of words.",
    technologies: ["React", "Bootstrap", "Javascript"],
    frontImage: project_2,
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    url: "https://case-converter-murex.vercel.app",
    repoLink: "https://github.com/usaid-anxari/Case-Converter",
  },
  {
    id: 3,
    title: "Code Writer",
    desc: "Write the code and get the output in the console.",
    technologies: ["Html", "Css", "Javascript"],
    frontImage: project_3,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://codex-writer.vercel.app",
    repoLink: "https://github.com/usaid-anxari/CodexWriter",
  },
  {
    id: 4,
    title: "Calculator",
    desc: "Calculator the Mathametics equation.",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_4,
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    url: "https://calculator-kappa-ashen.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Calculator",
  },
  {
    id: 5,
    title: "Dummy Profile",
    desc: "Dummy Profile to show the profile details.",
    technologies: ["React", "Tailwind", "Javascript"],
    frontImage: project_5,
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    url: "https://dummy-profile.vercel.app",
    repoLink: "https://github.com/usaid-anxari/DummyProfile",
  },
  {
    id: 6,
    title: "Image Engine",
    desc: "Image Search Engine to search the images.",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_6,
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    url: "https://image-sreach-engine.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Image-sreach-engine",
  },
  {
    id: 7,
    title: "Password Generator",
    desc: "Generate the password with the given parameters.",
    technologies: ["React", "Tailwind", "Javascript"],
    frontImage: project_7,
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    url: "https://password-genrater.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Password-genrater",
  },
  {
    id: 8,
    title: "Todo React",
    desc: "Todo List with React.",
    technologies: ["JSX", "Tailwindcss", "React"],
    frontImage: project_8,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://todo-app-ten-omega-61.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/todo-in-reactJS",
  },
  {
    id: 9,
    title: "Age Calculator",
    desc: "That 's a simple age calculator.",
    technologies: ["Html", "CSS", "Java Script"],
    frontImage: project_9,
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    url: "https://agewise-usaid-ahmeds-projects.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Agewise",
  },
  {
    id: 10,
    title: "Notes hub",
    desc: "That Notes hub is a simple note taking app.",
    technologies: ["Html", "CSS", "javascript"],
    frontImage: project_10,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://quick-note-hub.vercel.app/",
    repoLink: "httpshttps://github.com/usaid-anxari/Quick-Note-Hub",
  },
  {
    id: 11,
    title: "Quote hub",
    desc: "That Quote hub is a simple quote app.",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_11,
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    url: "https://quotify-hub-ten.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Quotify-Hub",
  },
  {
    id: 12,
    title: "Random Password Generator",
    desc: "Password Generator",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_12,
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    url: "https://pass-quill.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/PassQuill",
  },
  {
    id: 13,
    title: "Quiz App",
    desc: "Quiz Application",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_13,
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    url: "https://quizzical-minds.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Quizzical-Minds",
  },
  {
    id: 14,
    title: "MCQs App",
    desc: "MCQs App with 5 pages.",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_14,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://quiz-app-phi-ashy.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Quiz-App",
  },
  {
    id: 15,
    title: "Tic Tac Toe",
    desc: "That Is Simple Tic Tac Toe Game",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_15,
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    url: "https://tic-tac-one.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Tic-Tac",
  },
  {
    id: 16,
    title: "Nokia bounse-game",
    desc: "That Is Simple Game.",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_16,
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    url: "https://bounse-game.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Bounse-Game",
  },

  {
    id: 17,
    title: "To-Do List",
    desc: "That Is the simple To-Do List App.",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_17,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://todo-flow-alpha.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/TodoFlow",
  },
   {
    id: 18,
    title: "Image Generatore",
    desc: "That Is the simple Image Generatore to create the simple logo.",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_18,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://photo-fusion-three.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/PhotoFusion",
  },
   {
    id: 19,
    title: "Sky Cast",
    desc: "That Is the simple Weather App.",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_19,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://sky-cast-sandy.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Sky-Cast",
  },
  {
    id: 20,
    title: "Product Cart",
    desc: "That Is the simple Shopping cart.",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_20,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://prodcuts-page.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Prodcuts-Page-",
  },{
    id: 21,
    title: "QrSnap Pro",
    desc: "That Is the simple QrCode Generator.",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_21,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://snap-qr-pro.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Snap-QRPro",
  },{
    id: 22,
    title: "Text to voice converter",
    desc: "That Is the simple Text to voice converter.",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_22,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://voice-converter-kohl.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Voice-Converter",
  },{
    id: 23,
    title: "Stop Watch",
    desc: "That Is the simple Stop Watch.",
    technologies: ["Html", "CSS", "Javascript"],
    frontImage: project_23,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://stop-watch-kappa-ashen.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/stopWatch",
  },{
    id: 24,
    title: "Resturent Food App",
    desc: "That Is the simple Resturent Food App.",
    technologies: ["React", "Css", "JSX", "react-dom"],
    frontImage: project_24,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://sky-cast-sandy.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/Sky-Cast",
  },
  {
    id: 25,
    title: "Admin Dashboard",
    desc: "That Is the simple Admin Dashboard.",
    technologies: ["React", "Tailwind", "JSX", "react-dom"],
    frontImage: project_1,
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    url: "https://dash-board-usaid-ahmeds-projects.vercel.app/",
    repoLink: "https://github.com/usaid-anxari/DashBoard",
  },
];

const experienceList = [
  {
    id: 0,
    company: "Vocsina",
    links: {
      website: "https://www.linkedin.com/company/vocsena/",
      facebook: "https://www.facebook.com/vocsena/",
    },
  },
  // {
  //     id: 1,
  //     company: "Wingman Lab",
  //     links: {
  //         website: "https://wingmanlab.com/",
  //         facebook: "https://www.facebook.com/wingmanlab",
  //         instagram: "https://www.instagram.com/wingman_lab/",
  //     },
  // },
];

export { skillsList, projectList, experienceList };
