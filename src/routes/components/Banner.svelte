<script>
  import Parallax from "./Parallax.svelte";
  import Icon from "svelte-awesome";
  import { arrowDown, github, stackOverflow } from "svelte-awesome/icons";

  import Fa from "svelte-fa";
  import { faFlag, faMessage } from "@fortawesome/free-solid-svg-icons";
  import {
    faNpm,
    faGithub,
    faStackOverflow,
  } from "@fortawesome/free-brands-svg-icons";
</script>

<div
  class="w-100 h-screen  bg-brightRedLight p-16 text-center text-3xl text-white bg-gradient-to-r to-red-500 from-brightRed
  flex flex-col justify-center align-center
  
  "
>
  <div class="p-4 font-light text-4xl">Siddharth's Portfolio</div>
  <div class="p-2 font-semibold text-xl">I am a freelancer</div>
  <div class="flex p-4" />
  <div class="w-6/12 mx-auto flex justify-center">
    <div class="px-4">
      <Fa icon={faMessage} size="16px" spin="true" />
    </div>
    <div class="px-4">
      <Fa icon={faGithub} pulse="true" />
    </div>
    <div class="px-4">
      <Fa icon={faNpm} />
    </div>
    <div class="px-4">
      <Fa icon={faStackOverflow} />
    </div>
  </div>
</div>
<Parallax />
