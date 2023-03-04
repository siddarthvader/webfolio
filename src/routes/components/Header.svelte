<script>
  import Icon from "svelte-awesome";
  import { bars, play, pencil } from "svelte-awesome/icons";
</script>

<!-- Flex container -->
<div class="flex items-center justify-between  border-b-2  px-6 pt-2">
  <!-- Logo -->
  <div class="px-2 py-2 ">
    <div class="text-2xl text-brightRed font-light">Siddharth's Page</div>
  </div>
  <!-- Menu Items -->
  <div class="hidden space-x-6 md:flex flex-1 justify-end px-4 py-2">
    <a href="#" class="hover:text-brightRed text-zinc-900">About</a>
    <a href="#" class="hover:text-brightRed text-zinc-900">Work</a>
    <a href="#" class="hover:text-brightRed text-zinc-900">Open Source</a>
    <a href="#" class="hover:text-brightRed text-zinc-900">Music</a>
    <a href="#" class="hover:text-brightRed text-zinc-900">Stories</a>
  </div>
  <!-- Button -->
  <button
    class="flex items-center text-white bg-brightRed  baseline hover:bg-zinc-900 hover:text-white p-2 "
  >
    <span>Contact Me</span>

    <Icon data={pencil} class="ml-2" />
  </button>

  <!-- Hamburger Icon -->
  <div class="md:hidden">
    <Icon data={bars} />
  </div>

  <!-- Mobile Menu -->
  <div class="md:hidden">
    <div
      id="menu"
      class=" absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
    >
      <a href="#" class="text-brightRedLight">Pricing</a>
      <a href="#">Product</a>
      <a href="#">About Us</a>
      <a href="#">Careers</a>
      <a href="#">Community</a>
    </div>
  </div>
</div>
