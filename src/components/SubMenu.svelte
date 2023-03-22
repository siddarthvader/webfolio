<script lang="ts">
  import Fa from "svelte-fa";
  import { SubMenuList } from "../data/constants";
</script>

<div
  class="h-[48px] w-full bg-gradient-to-r to-red-500 from-brightRed flex items-center justify-between px-6"
>
  <div class="flex">
    {#each SubMenuList as smenu}
      <a
        class="px-4 cursor-pointer text-xl"
        href={smenu.link}
        target="_blank"
        rel="noreferrer"
      >
        <Fa icon={smenu.icon} class="text-white" />
      </a>
    {/each}
  </div>
  <button
    class="text-sm hover:text-white rounded-full hover:bg-brightRed  baseline py-1 px-2  hover:border-white border border-brightRed bg-white text-brightRed"
    >Contact Me
  </button>
</div>
