<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { PAGES } from "../data/constants";

  import SubMenuMobile from "./SubMenuMobile.svelte";

  export let open: boolean = false;
  export let activeTab: string;

  const dispatch = createEventDispatcher();

  function toggleMenu(open: boolean): void {
    console.log("toggleMenu is..", open);
    dispatch("toggle", { open });
  }
  function changeState(activeTab: string): void {
    dispatch("change", { activeTab });
  }
  function handleClickOutside(e: CustomEvent) {
    dispatch("toggle", { open: false });
  }
</script>

<button
  class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white xl:hidden"
  on:click={() => toggleMenu(!open)}
>
  <span class="sr-only">Open main menu</span>
  <div
    class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2"
  >
    <span
      aria-hidden="true"
      class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
      class:rotate-45={open}
      class:-translate-y-1.5={!open}
    />

    <span
      aria-hidden="true"
      class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out"
      class:opacity-0={open}
    />
    <span
      aria-hidden="true"
      class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out"
      class:-rotate-45={open}
      class:translate-y-1.5={!open}
    />
  </div>
</button>

{#if open}
  <button
    on:click={(e) => handleClickOutside(e)}
    class="w-full h-[calc(100%-42px)] absolute right-0 top-[40px] bottom-0 bg-zinc-400 bg-opacity-70 z-[100] flex justify-end"
  >
    <div class="w-[60%] h-full flex-col flex bg-veryPaleRed">
      <!-- <div
        class="h-[20%] w-full text-xl text-zinc-600 font-bold items-end flex justify-center"
      >
        Siddharth's Portfolio
      </div> -->
      <div
        class="flex w-full h-[80%] flex-col space-y-4 overflow-scroll py-6 justify-end"
      >
        {#each PAGES as page}
          <button
            class={`text-xl font-semibold cursor-pointer hover:text-brightRed ${
              activeTab === page.name ? "text-brightRed" : " text-zinc-600"
            }`}
            on:click={() => changeState(page.name)}
          >
            {page.label}
          </button>
        {/each}
      </div>
      <SubMenuMobile />
    </div>
  </button>
{/if}
