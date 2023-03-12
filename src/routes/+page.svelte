<script lang="ts">
  import Header from "./components/Header.svelte";
  import { PAGES } from "./data/constants";

  let state: Record<string, string> = { activeTab: "home" };

  function tabChange(ev) {
    state.activeTab = ev.detail.activeTab;
  }
</script>

<div class="w-100 h-[calc(100vh-40px)] ">
  {#each PAGES as { name, component }, i}
    {#if state.activeTab == name}
      <svelte:component this={component} />
    {/if}
  {/each}
</div>
<Header activeTab={state.activeTab} on:change={tabChange} />
