<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { PAGES } from "../data/constants";
  import MobileMenu from "./MobileMenu.svelte";

  export let activeTab: string;
  let mobileOpen: boolean = false;

  const dispatch = createEventDispatcher();

  function changeState(activeTab: string): void {
    dispatch("change", { activeTab });
  }

  function openMenu(ev: CustomEvent) {
    console.log("ev.detaul.open", ev.detail.open);
    mobileOpen = ev.detail.open;
  }

  function changeTab(ev: CustomEvent) {
    changeState(ev.detail.activeTab);
  }
</script>

<div
  class="flex items-center justify-end xl:justify-between  border-b-2  px-6 z-20"
>
  <div class="space-x-6 hidden xl:flex flex-1 justify-end px-4 py-2">
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

  <MobileMenu
    {activeTab}
    on:toggle={openMenu}
    on:change={changeTab}
    open={mobileOpen}
  />
</div>
