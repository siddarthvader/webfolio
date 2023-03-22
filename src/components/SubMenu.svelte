<script lang="ts">
  import Fa from "svelte-fa";
  import { SubMenuList } from "../data/constants";
  import Contact from "./Contact.svelte";
</script>

<div
  class="h-[48px] w-full bg-gradient-to-r to-red-500 from-brightRed xl:flex hidden items-center justify-between px-6"
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
  <Contact />
</div>
