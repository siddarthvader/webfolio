<script>
  import Fa from "svelte-fa";
  import { createEventDispatcher } from "svelte";
  import { faHamburger } from "@fortawesome/free-solid-svg-icons";
  export let activeTab;

  const dispatch = createEventDispatcher();

  function changeState(activeTab) {
    console.log("activeTab is...", activeTab);
    dispatch("change", { activeTab });
  }
</script>

<!-- Flex container -->
<div class="flex items-center justify-between  border-b-2  px-6 ">
  <!-- Logo -->
  <!-- <div class="px-2 py-2 ">
    <div class="text-zinc-900 font-light">siddharthjn93@gmail.com</div>
  </div> -->
  <!-- Menu Items -->
  <div class="hidden space-x-6 md:flex flex-1 justify-end px-4 py-2">
    <button
      class=" cursor-pointer hover:text-brightRed text-zinc-900"
      on:click={() => changeState("about")}
    >
      About
    </button>
    <button
      class="cursor-pointer hover:text-brightRed text-zinc-900"
      on:click={() => changeState("work")}>Work</button
    >
    <button
      class="cursor-pointer hover:text-brightRed text-zinc-900"
      on:click={() => changeState("open_source")}
    >
      Open Source
    </button>
    <button
      class="cursor-pointer hover:text-brightRed text-zinc-900"
      on:click={() => changeState("music")}>Music</button
    >
    <button
      class="cursor-pointer hover:text-brightRed text-zinc-900"
      on:click={() => changeState("stories")}>Stories</button
    >
  </div>
  <!-- Button -->

  <!-- Hamburger Icon -->
  <div class="md:hidden">
    <Fa icon={faHamburger} />
  </div>

  <!-- Mobile Menu -->
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
