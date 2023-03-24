<script lang="ts">
  import Fa from "svelte-fa";
  import { SubMenuList } from "../data/constants";
  import Contact from "./Contact.svelte";
</script>

<div
  class="w-full h-[20%] bg-gradient-to-r to-red-500 from-brightRed flex flex-col items-center p-2"
>
  <div class="flex flex-row w-full justify-start flex-wrap">
    {#each SubMenuList as smenu}
      <a
        class="pl-4 cursor-pointer text-xl"
        href={smenu.link}
        target="_blank"
        rel="noreferrer"
      >
        <Fa icon={smenu.icon} size="1.2x" class="text-white" />
      </a>
    {/each}
  </div>
  <Contact />
</div>
