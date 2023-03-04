<script>
  import Parallax from "./Parallax.svelte";
  import Icon from "svelte-awesome";
  import { arrowDown, github, stackOverflow } from "svelte-awesome/icons";

  import Fa from "svelte-fa";
  import {
    faFlag,
    faMessage,
    faContactCard,
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faNpm,
    faGithub,
    faStackOverflow,
  } from "@fortawesome/free-brands-svg-icons";
</script>

<div
  class="w-100 h-screen relative  p-16 text-center text-3xl text-white 
  flex flex-col justify-center align-center z-10"
>
  <div class="p-4 font-light text-4xl">Siddharth's Portfolio</div>
  <div class="p-2 font-semibold text-xl">I am a freelancer</div>
  <div class="flex p-4" />
  <div class="w-6/12 mx-auto flex justify-center">
    <div class="px-4 cursor-pointer">
      <Fa icon={faMessage} />
    </div>
    <div class="px-4 cursor-pointer">
      <Fa icon={faGithub} />
    </div>
    <div class="px-4 cursor-pointer">
      <Fa icon={faNpm} />
    </div>
    <div class="px-4 cursor-pointer">
      <Fa icon={faStackOverflow} />
    </div>
  </div>
  <div class="justify-center flex pt-4">
    <button
      class="text-sm text-white rounded-full  baseline py-2 px-4 m-4  border-white border hover:border-brightRed hover:bg-white hover:text-brightRed"
      >Contact Me
    </button>
  </div>
</div>
<Parallax />
