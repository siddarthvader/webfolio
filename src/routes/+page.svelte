<script lang="ts">
  import Header from "./components/Header.svelte";
  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
  import Music from "./pages/Music.svelte";
  import Opensource from "./pages/Opensource.svelte";
  import Stories from "./pages/Stories.svelte";
  import Work from "./pages/Work.svelte";

  let state = { activeTab: "home" };

  function tabChange(ev) {
    console.log("here we are...", ev.detail.activeTab);
    state.activeTab = ev.detail.activeTab;
  }
</script>

<div
  class="w-100 h-[calc(100vh-40px)] relative text-center text-3xl text-white 
    flex flex-col justify-center align-center"
>
  {#if state.activeTab == "home"}
    <Home />
  {/if}
  {#if state.activeTab == "work"}
    <Work />
  {/if}
  {#if state.activeTab == "about"}
    <About />
  {/if}
  {#if state.activeTab == "stories"}
    <Stories />
  {/if}
  {#if state.activeTab == "open_source"}
    <Opensource />
  {/if}
  {#if state.activeTab == "music"}
    <Music />
  {/if}
</div>
<Header activeTab={state.activeTab} on:change={tabChange} />
