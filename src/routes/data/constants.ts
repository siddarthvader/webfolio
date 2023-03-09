import About from "../pages/About.svelte";
import Home from "../pages/Home.svelte";
import Music from "../pages/Music.svelte";
import Opensource from "../pages/Opensource.svelte";
import Stories from "../pages/Stories.svelte";
import Work from "../pages/Work.svelte";

const PAGES = [
  { name: "home", label: "Home", component: Home },
  { name: "about", label: "About", component: About },
  { name: "work", label: "Work", component: Work },
  { name: "stories", label: "Stories", component: Stories },
  { name: "open_source", label: "Open Source", component: Opensource },
  { name: "music", label: "Music", component: Music },
];

export { PAGES };
