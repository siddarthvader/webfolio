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
  faFootball,
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
  { name: "open_source", label: "Open Source", component: Opensource },
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
};
const InterestList: iInterest[] = [
  {
    icon: faMusic,
  },
  {
    icon: faFootball,
  },
  {
    icon: faBlog,
  },
  {
    icon: faRunning,
  },
  {
    icon: faBowlFood,
  },
  {
    icon: faBook,
  },
  {
    icon: faGlobe,
  },
];

export { PAGES, SubMenuList, TimeLine, InterestList };
