<script lang="ts">
  import Header from "./components/Header.svelte";
  import { PAGES } from "./data/constants";

  let state: Record<string, string> = { activeTab: "home" };

  function tabChange(ev) {
    state.activeTab = ev.detail.activeTab;
  }
</script>

<div
  class="w-100 h-[calc(100vh-40px)] relative text-center text-3xl text-white 
    flex flex-col justify-center align-center"
>
  {#each PAGES as { name, component }, i}
    {state.activeTab}
    {#if state.activeTab == name}
      <svelte:component this={component} />
    {/if}
  {/each}
</div>
<Header activeTab={state.activeTab} on:change={tabChange} />
