import {
  faGithub,
  faMicroblog,
  faNpm,
  faSoundcloud,
  faStackOverflow,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
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

export { PAGES, SubMenuList };
