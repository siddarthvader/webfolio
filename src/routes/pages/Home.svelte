<script>
  import Parallax from "../components/Parallax.svelte";

  import Fa from "svelte-fa";
  import { faMessage } from "@fortawesome/free-solid-svg-icons";
  import {
    faNpm,
    faGithub,
    faStackOverflow,
    faSoundcloud,
  } from "@fortawesome/free-brands-svg-icons";
</script>

<div class="p-4 font-light text-4xl  z-10">Siddharth's Portfolio</div>
<div class="p-2 font-semibold text-xl  z-10">I am a freelancer</div>
<div class="flex p-4" />
<div class="w-6/12 mx-auto flex justify-center  z-10">
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
  <div class="px-4 cursor-pointer">
    <Fa icon={faSoundcloud} />
  </div>
  <div class="px-4 cursor-pointer flex items-center">
    <svg
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      image-rendering="optimizeQuality"
      fill-rule="evenodd"
      clip-rule="evenodd"
      viewBox="0 0 448 511.471"
      ><path
        fill="white"
        d="M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z"
      /></svg
    >
  </div>
</div>
<div class="justify-center flex pt-4  z-10">
  <button
    class="text-sm text-white rounded-full  baseline py-2 px-4 m-4  border-white border hover:border-brightRed hover:bg-white hover:text-brightRed"
    >Contact Me
  </button>
</div>
<Parallax />
