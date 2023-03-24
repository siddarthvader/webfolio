<script lang="ts">
  import Header from "../components/Header.svelte";
  import SubMenu from "../components/SubMenu.svelte";
  import { PAGES } from "../data/constants";

  let state: Record<string, string> = { activeTab: "about" };
  export const prerender = true;

  function tabChange(ev: CustomEvent) {
    state.activeTab = ev.detail.activeTab;
  }
</script>

<Header activeTab={state.activeTab} on:change={tabChange} />

<div class="w-full xl:h-[calc(100vh-40px)] h-full pb-12 xl:pb-0">
  {#each PAGES as { name, component }, i}
    {#if state.activeTab == name}
      <svelte:component this={component} />
    {/if}
  {/each}
  {#if state.activeTab != "home"}
    <SubMenu />
  {/if}
</div>

<style lang="scss" global>
  .page-title {
    position: relative;
    box-sizing: border-box;
    &:before {
      box-sizing: border-box;
      content: "";
      background-image: url(../assets/dots-bg.svg);
      display: block;
      height: 37px;
      left: 0px;
      top: 0px;
      position: absolute;
      width: 37px;
    }
  }
</style>
