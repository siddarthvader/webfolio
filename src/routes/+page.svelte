<script lang="ts">
  import Header from "./components/Header.svelte";
  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
  import Music from "./pages/Music.svelte";
  import Stories from "./pages/Stories.svelte";
  import Work from "./pages/Work.svelte";
</script>

<div
  class="w-100 h-[calc(100vh-40px)] relative text-center text-3xl text-white 
    flex flex-col justify-center align-center"
>
  <Home />
  <Work />
  <About />
  <Stories />
  <Music />
</div>
<Header />
