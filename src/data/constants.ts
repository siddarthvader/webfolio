import {
  faAngular,
  faCss3Alt,
  faGithub,
  faNpm,
  faPhp,
  faReact,
  faSoundcloud,
  faStackOverflow,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

import {
  faBaseball,
  faBlog,
  faBook,
  faBowlFood,
  faBriefcase,
  faChartLine,
  faFootball,
  faGamepad,
  faGlobe,
  faMusic,
  faRunning,
  faShareSquare,
  faTruck,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

import About from "../pages/About.svelte";
import Home from "../pages/Home.svelte";
import Music from "../pages/Music.svelte";
import Stories from "../pages/Stories.svelte";
import Work from "../pages/Work.svelte";

import { faPenNib } from "@fortawesome/free-solid-svg-icons";

type iPage = {
  name: string;
  label: string;
  component: any;
};
const PAGES: iPage[] = [
  // { name: "home", label: "Home", component: Home },
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

export type TimeLinkLink = { text: string; link: string };

type iTimeLine = {
  title: string;
  time: string;
  description: string;
  link: TimeLinkLink[];
};

const TimeLine: iTimeLine[] = [
  {
    title: "Freelancer",
    time: "March 2017 - Now",
    description:
      "Wrote ample amount of SaaS, Single Page applications using various frameworks, concurretnly maintaing the quality of code and keeping it clean, readable, as much as the context permitted.",

    link: [
      {
        text: "Top Rated Upwork Freelancer",
        link: "https://www.upwork.com/freelancers/~016fec88e43102b929",
      },
    ],
  },
  {
    title: "Front-end Consultant",
    time: "April 2020 - Feb 2023",
    description:
      "Worked on a Business Intelligence software and worked with a very smart team to bring data to visualization. We wrote a lot of Mithril and React, got to work on really interesting problems for e.g. writing sql token editors and web maps.",

    link: [
      {
        text: "Company Profile",
        link: "https://bipp.io/",
      },
    ],
  },
  {
    title: "Front-end Lead",
    time: "March 2018 - July 2019",
    description: `Was part of a startup(quikmile) where we created a system to minimize the inefficiencies in the transportation and logistics sector in the country. With the help of cutting-edge technology. Our team of tech experts intent to help fleet owners bridge the gaps and get the best ROI from their fleet and in-turn grow their business.`,
    link: [
      {
        text: "Company Profile",
        link: "https://www.crunchbase.com/organization/quikmile",
      },
      {
        text: "Acqusition by Airtel",
        link: "https://yourstory.com/2019/11/bharti-airtel-acquihires-vehicle-tracking-logistics-startup-quikmile",
      },
    ],
  },
  {
    title: "Lead Developer",
    time: "Jan 2016 - March 2017",
    description:
      "Contributed to Developement a Learning Management System for a  startup named Acadaly, wrote admin panel for a system helping University teachers/students.",
    link: [
      {
        text: "Company Profile",
        link: "https://www.acadly.com/",
      },
    ],
  },
  {
    title: "Junior Developer",
    time: "July 2014 - Dec 2015",
    description:
      "Was a junior developer for a FinTech company called Nucleus Software, Was mostly writing jquery day-in day out, It was fun while it lasted.",
    link: [
      { text: "Company Profile", link: "https://www.nucleussoftware.com/" },
    ],
  },
  {
    title: "College Guy",
    time: "July 2010- July 2014",
    description:
      "I went to National Institute of Technology, Jaipur for undergraduate degree. Started writing code in College and listened to a lot of Rock music and managed crowd and teams.",
    link: [
      {
        text: "College",
        link: "https://mnit.ac.in/",
      },
    ],
  },
  {
    title: "Random Person ",
    time: "Jan 1993- July 2010",
    description:
      "Was a very random person, interested in a lot of things and ended up joining Engineering college.",
    link: [],
  },
];

type iInterest = {
  icon: IconDefinition;
  name: string;
  size: string;
};

const InterestList: iInterest[] = [
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
  {
    icon: faMusic,
    name: "Music",
    size: "3xl",
  },
  {
    icon: faGlobe,
    name: "Typescript",
    size: "2xl",
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
    name: "GIT ",
    size: "3xl",
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
    name: "Fantasy Fiction",
    size: "xl",
  },
];

export type WorkCategoryOption =
  | "All"
  | "Front-end"
  | "Back-end"
  | "Game"
  | "Open Source";

const WorkCategory: WorkCategoryOption[] = [
  "All",
  "Front-end",
  "Back-end",
  "Game",
  "Open Source",
];

type TechItem =
  | "HTML"
  | "CSS"
  | "Javascript"
  | "React"
  | "Mithril"
  | "AngularJS"
  | "Nodejs"
  | "Express"
  | "Sass"
  | "MongoDB"
  | "Postgres"
  | "Mapbox"
  | "GIS"
  | "Leaflet"
  | "OpenMapTiles"
  | "OpenStreetMap"
  | "d3.js"
  | "Heroku"
  | "Canvas"
  | "Jquery"
  | "PHP"
  | "Express.js"
  | "Quasar"
  | "Flutter"
  | "MySQL"
  | "Tachyons"
  | "AWS"
  | "GCP"
  | "Tailwind"
  | "Svelte"
  | "Typescript"
  | "Prisma";

type iWorkItem = {
  id: string;
  category: WorkCategoryOption[];
  title: string;
  description: string;
  icon: IconDefinition;
  techList: TechItem[];
  completeTagList: TechItem[];
  link: Record<string, string>[];
};
const WorkList: iWorkItem[] = [
  {
    id: "pasteviz",
    category: ["All", "Front-end"],
    title: "PasteViz, Viz on Fly",
    icon: faBriefcase,
    description: ` PasteViz is a webapp written in svelte which allows user to generate and embed analytics/visualizations on the fly. It is a single page application.`,
    techList: ["Svelte", "Typescript", "Tailwind"],
    completeTagList: ["Svelte", "Typescript", "Tailwind"],
    link: [
      {
        text: "github",
        link: "https://github.com/siddarthvader/pasteviz",
      },
      {
        text: "web",
        link: "https://pasteviz.vercel.app/",
      },
    ],
  },
  {
    id: "geocoding",
    category: ["All", "Back-end"],
    title: "Batch GeoCoding",
    icon: faBriefcase,
    description:
      " BatchGeoding is an API written in Express.js which allows user to geocode a list of addresses in a single request. It uses Prisma ORM and Mysql as database",
    techList: ["Express.js", "Typescript", "Prisma", "MySQL"],
    completeTagList: ["Express.js", "Typescript", "Prisma", "MySQL"],
    link: [
      {
        text: "github",
        link: "https://github.com/siddarthvader/geocoding-api",
      },
      {
        text: "documentation",
        link: "https://geocoding-api.vercel.app/",
      },
    ],
  },
  {
    id: "webfolio_new",
    category: ["All", "Front-end"],
    title: "Web Portfolio (Self)",
    icon: faBriefcase,
    description: ` A web portofolio written for self, using Svelte, Typescript and Tailwind. This is a single page application.`,
    techList: ["Svelte", "Typescript", "Tailwind"],
    completeTagList: ["Svelte", "Typescript", "Tailwind"],
    link: [
      {
        text: "github",
        link: "https://github.com/siddarthvader/webfolio",
      },
      {
        text: "web",
        link: "https://www.siddharthjain.in/",
      },
    ],
  },
  {
    id: "angular_httpshooter",
    category: ["All", "Open Source", "Front-end"],
    title: "Angular-httpshooter",
    icon: faAngular,
    description: ` A factory written in angular 1.0+ which makes/shoots all http calls collectively asynchronously.Angular-httpshooter makes all your api calls asynchronous, idea behind it to make the connection between server and client single threaded, it means shooting only one call at a point of time and wait for the response from server to launch the next call.`,
    techList: ["AngularJS", "Javascript"],
    completeTagList: ["AngularJS", "Javascript"],
    link: [
      {
        text: "npm",
        link: "https://www.npmjs.com/package/angular-httpshooter",
      },
      {
        text: "github",
        link: "https://www.npmjs.com/package/angular-httpshooter",
      },
    ],
  },
  {
    id: "css_media_all",
    category: ["All", "Open Source", "Front-end"],
    title: "CSS MEDIA ALL",
    icon: faCss3Alt,
    description: ` A library written in css consisted of media queries to support the responsiveness of webpage. CMA(Css Media All) makes your webpage responsive, idea behind this library is to make webpage more responsive to differrent screens.`,
    techList: ["CSS", "Sass"],
    completeTagList: ["CSS", "Sass"],
    link: [
      {
        text: "npm",
        link: "https://www.npmjs.com/package/css-media-all",
      },
      {
        text: "github",
        link: "https://github.com/siddarthvader/CSS-MEDIA-ALL",
      },
    ],
  },
  {
    id: "trading_app",
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
      "Express.js",
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
    id: "univ_man",
    category: ["All", "Front-end", "Back-end"],
    title: "University Management System",
    icon: faUniversity,
    description: ` A university management system written in mithril.js for a skill development university. It enabled user to add courses/ add students to course/comments/ render blog and many such functions.`,
    techList: ["Mithril", "MySQL", "Tachyons", "AWS"],
    completeTagList: ["Mithril", "MySQL", "Tachyons", "AWS", "GCP"],
    link: [
      {
        text: "contact",
        link: "",
      },
    ],
  },

  {
    id: "ball_game",
    category: ["All", "Front-end", "Game"],
    title: "Ball Game",
    icon: faGamepad,
    description: ` Developed a ball game in javascript using canvas. Where you can control a moveable bar at the bottom of a box using keyboards and deflects a single ball, stopping it from falling down. You can obtain a score and high score for subsequet runs.`,
    techList: ["Canvas", "Javascript", "Jquery"],
    completeTagList: ["Canvas", "Javascript", "Jquery", "HTML", "CSS"],
    link: [
      {
        text: "play",
        link: "https://github.com/siddarthvader/nevApp",
      },
    ],
  },
  {
    id: "empman",
    category: ["All", "Front-end", "Back-end"],
    title: "Employees Management Portal",
    icon: faReact,
    description: ` A ERP software written for a clothing factory where they had lot of new labours everyday, system helped them mark attendence of labour force and prepared a ledger.`,
    techList: ["React", "Javascript", "Postgres", "Express"],
    completeTagList: ["Javascript", "CSS", "HTML", "React"],
    link: [
      {
        text: "contact",
        link: "",
      },
    ],
  },
  {
    id: "fleet_man",
    category: ["All", "Front-end"],
    title: "Fleet Management Service",
    icon: faTruck,
    description: ` A Fleet management service written primarily in golang supported by quasar & flutter as front-end framework. I was responsible for managing where we tracked the trucks and presented analysis.`,
    techList: ["Javascript", "Quasar", "Flutter"],
    completeTagList: ["Javascript", "Quasar", "Flutter"],
    link: [
      {
        text: "contact",
        link: "https://github.com/siddarthvader/sms/tree/master",
      },
    ],
  },

  {
    id: "fee_management",
    category: ["All", "Front-end", "Back-end"],
    title: "Fee Management System",
    icon: faPhp,
    description: ` A fees management system for schools and college, written in PHP. You can create Class, Batch, Students, Teacher profile and manage the fee management for whole school, transfer of students to other class and other things.`,
    techList: ["PHP", "CSS", "HTML", "Javascript"],
    completeTagList: ["PHP", "CSS", "HTML", "Javascript"],
    link: [
      {
        text: "github",
        link: "https://github.com/siddarthvader/sms/tree/master",
      },
    ],
  },
  {
    id: "college_fest",
    category: ["All", "Front-end"],
    title: "College Fest Website",
    icon: faBaseball,
    description: ` A marketing/portfolio website for sports tournament of my college. My First project ever.`,
    techList: ["PHP", "HTML", "CSS"],
    completeTagList: ["PHP", "HTML", "CSS"],
    link: [
      {
        text: "github",
        link: "https://github.com/siddarthvader/mst/tree/master",
      },
    ],
  },
];
type DayStatusOption = "day" | "night";

export type DayStatus = {
  status: DayStatusOption;
};
export { PAGES, SubMenuList, TimeLine, InterestList, WorkCategory, WorkList };
