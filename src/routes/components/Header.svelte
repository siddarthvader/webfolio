<script lang="ts">
  import Fa from "svelte-fa";
  import { createEventDispatcher } from "svelte";
  import { faHamburger } from "@fortawesome/free-solid-svg-icons";
  import { PAGES } from "../data/constants";

  export let activeTab: string;

  const dispatch = createEventDispatcher();

  function changeState(activeTab: string): void {
    console.log("activeTab is...", activeTab);
    dispatch("change", { activeTab });
  }
</script>

<div class="flex items-center justify-between  border-b-2  px-6 z-20">
  <div class="hidden space-x-6 md:flex flex-1 justify-end px-4 py-2">
    {#each PAGES as page}
      <button
        class={`cursor-pointer hover:text-brightRed ${
          activeTab === page.name ? "text-brightRed" : " text-zinc-600"
        }`}
        on:click={() => changeState(page.name)}
      >
        {page.label}
      </button>
    {/each}
  </div>

  <div class="md:hidden">
    <Fa icon={faHamburger} />
  </div>

  <div class="md:hidden">
    <div
      id="menu"
      class=" absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
    >
      <div class=" cursor-pointer hover:text-brightRed text-zinc-900">
        About
      </div>
      <div class="cursor-pointer hover:text-brightRed text-zinc-900">Work</div>
      <div class="cursor-pointer hover:text-brightRed text-zinc-900">
        Open Source
      </div>
      <div class="cursor-pointer hover:text-brightRed text-zinc-900">Music</div>
      <div class="cursor-pointer hover:text-brightRed text-zinc-900">
        Stories
      </div>
    </div>
  </div>
</div>
