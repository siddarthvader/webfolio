<script>
  import Parallax from "../components/Parallax.svelte";

  import Fa from "svelte-fa";
  import { SubMenuList } from "../data/constants";
</script>

<div
  class="text-white z-10 relative text-center text-3xl 
flex flex-col justify-center align-center h-full w-full"
>
  <div class="p-4 font-light text-4xl  ">Siddharth's Portfolio</div>
  <div class="p-2 font-semibold text-xl  ">I am a freelancer</div>
  <div class="flex p-4" />
  <div class="w-6/12 mx-auto flex justify-center ">
    {#each SubMenuList as smenu}
      <a
        class="px-4 cursor-pointer"
        href={smenu.link}
        target="_blank"
        rel="noreferrer"
      >
        <Fa icon={smenu.icon} />
      </a>
    {/each}
  </div>
  <div class="justify-center flex pt-4 ">
    <button
      class="text-sm text-white rounded-full  baseline py-2 px-4 m-4  border-white border hover:border-brightRed hover:bg-white hover:text-brightRed"
      >Contact Me
    </button>
  </div>
</div>
<Parallax />
