import {
  faGithub,
  faMicroblog,
  faNpm,
  faSoundcloud,
  faStackOverflow,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

import {
  faBlog,
  faBook,
  faBowlFood,
  faChartLine,
  faFootball,
  faGamepad,
  faGlobe,
  faMusic,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
import About from "../pages/About.svelte";
import Home from "../pages/Home.svelte";
import Music from "../pages/Music.svelte";
import Opensource from "../pages/Opensource.svelte";
import Stories from "../pages/Stories.svelte";
import Work from "../pages/Work.svelte";

import { faPenNib } from "@fortawesome/free-solid-svg-icons";

type iPage = {
  name: string;
  label: string;
  component: any;
};
const PAGES: iPage[] = [
  { name: "home", label: "Home", component: Home },
  { name: "about", label: "About", component: About },
  { name: "work", label: "Work", component: Work },
  { name: "stories", label: "Stories", component: Stories },
  // { name: "open_source", label: "Open Source", component: Opensource },
  { name: "music", label: "Music", component: Music },
];

type iSubMenu = {
  name: string;
  icon: IconDefinition;
  link: string;
};
const SubMenuList: iSubMenu[] = [
  {
    name: "Github",
    icon: faGithub,
    link: "https://github.com/siddarthvader",
  },
  {
    name: "NPM",
    icon: faNpm,
    link: "https://www.npmjs.com/settings/siddarthvader/packages",
  },
  {
    name: "StackOverFlow",
    icon: faStackOverflow,
    link: "https://stackoverflow.com/users/2439835/siddharth",
  },
  {
    name: "SoundCloud",
    icon: faSoundcloud,
    link: "https://soundcloud.com/deeduman",
  },
  {
    name: "SubStack",
    icon: faPenNib,
    link: "https://punkhaa.substack.com/?utm_source=siddharthjain.in",
  },
];

type iTimeLine = {
  title: string;
  time: string;
  description: string;
};

const TimeLine: iTimeLine[] = [
  {
    title: "Freelancer",
    time: "March 2017 - Now",
    description:
      "I have written fair amount of SaaS, Single Page applications using various frameworks, concurretnly maintaing the quality of code and keeping it clean, as much as the situation allowed.",
  },
  {
    title: "Lead Developer",
    time: "Jan 2016 - March 2017",
    description:
      "I worked on a Learning Management System, where I wrote admin panel for a system helping University teachers/students.",
  },
  {
    title: "Junior Developer",
    time: "Jan 2014 - Dec 2016",
    description:
      "I was a junior developer for a FinTech, I was mostly writing Jquery day-in day out, It was fun while it lasted.",
  },
  {
    title: "College Guy",
    time: "July 2010- July 2014",
    description:
      "I started writing code in College and I listened to a lot of Rock music and I managed crowd and teams.",
  },
  {
    title: "Random Person ",
    time: "Jan 1993- July 2010",
    description:
      "I was a very random person, interested in a lot of things and ended up joining Engineering college.",
  },
];

type iInterest = {
  icon: IconDefinition;
  name: string;
  size: string;
};
const InterestList: iInterest[] = [
  {
    icon: faMusic,
    name: "Music",
    size: "3xl",
  },
  {
    icon: faFootball,
    name: "Football",
    size: "xl",
  },
  {
    icon: faBlog,
    name: "Writing Stories",
    size: "2xl",
  },
  {
    icon: faRunning,
    name: "Running",
    size: "xl",
  },
  {
    icon: faBowlFood,
    name: "Reading",
    size: "3xl",
  },
  {
    icon: faBook,
    name: "Travelling",
    size: "xl",
  },
  {
    icon: faGlobe,
    name: "Coffee",
    size: "3xl",
  },
  {
    icon: faGlobe,
    name: "Music Festivals",
    size: "xl",
  },
  {
    icon: faGlobe,
    name: "Design Principles",
    size: "2xl",
  },
  {
    icon: faGlobe,
    name: "Functional Programming",
    size: "md",
  },
  {
    icon: faGlobe,
    name: "Arduino Programming",
    size: "md",
  },
  {
    icon: faGlobe,
    name: "Mixing Music",
    size: "2xl",
  },
  {
    icon: faGlobe,
    name: "CSS",
    size: "4xl",
  },
  {
    icon: faGlobe,
    name: "HTML",
    size: "3xl",
  },
  {
    icon: faGlobe,
    name: "Javascript",
    size: "3xl",
  },
  {
    icon: faGlobe,
    name: "GIS",
    size: "xl",
  },
];

const WorkCategory: string[] = [
  "All",
  "Front-end",
  "Back-end",
  "GIS",
  "Game",
  "Open Source",
];

type iWorkItem = {
  category: string[];
  title: string;
  description: string;
  icon: IconDefinition;
  techList: string[];
  completeTagList: string[];
  link: Record<string, string>[];
};
const WorkList: iWorkItem[] = [
  {
    category: ["All", "Front-end", "Back-end"],
    title: "Trading Application",
    icon: faChartLine,
    description: ` Developed a trading application which fetched historical data from Yahoo
    finance API for various Tickers/ Currencies/ Futures and did a lot of
    calculation and presented analysis.`,
    techList: ["AngularJS", "MongoDB", "Sass", "Express.js", "Heroku"],
    completeTagList: [
      "AngularJS",
      "MongoDB",
      "Sass",
      "express",
      "HTML",
      "CSS",
      "Javascript",
      "Nodejs",
    ],
    link: [
      {
        text: "Frontend",
        link: "https://github.com/siddarthvader/nevApp",
      },
      {
        text: "Backend ",
        link: "https://github.com/siddarthvader/nevDB",
      },
    ],
  },
  {
    category: ["All", "Front-end", "Game"],
    title: "Ball Game",
    icon: faGamepad,
    description: ` Developed a ball game in javascript using canvas. Where you can control a moveable bar at the bottom of a box using keyboards and deflects a single ball, stopping it from falling down. You can a score and high score for subsequet runs.`,
    techList: ["Canvas", "Javascript", "Jquery"],
    completeTagList: ["Canvas", "Javascript", "Jquery", "HTML", "CSS"],
    link: [
      {
        text: "Game",
        link: "https://github.com/siddarthvader/nevApp",
      },
    ],
  },
];

export { PAGES, SubMenuList, TimeLine, InterestList, WorkCategory, WorkList };
