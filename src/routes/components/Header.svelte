<script>
  import Icon from "svelte-awesome";
  import { bars } from "svelte-awesome/icons";
</script>

<div class=" border-b-2 py-2 px-6">
  <!-- Flex container -->
  <div class="flex items-center justify-between">
    <!-- Logo -->
    <div class="px-2">
      <div class="text-2xl text-brightRed font-light">Siddharth's Page</div>
    </div>
    <!-- Menu Items -->
    <div class="hidden space-x-6 md:flex flex-1 justify-end px-2">
      <a href="#" class="hover:text-brightRed text-brightRedLight">About</a>
      <a href="#" class="hover:text-brightRed text-brightRedLight">Work</a>
      <a href="#" class="hover:text-brightRed text-brightRedLight"
        >Open Source</a
      >
      <a href="#" class="hover:text-brightRed text-brightRedLight">Music</a>
      <a href="#" class="hover:text-brightRed text-brightRedLight">Stories</a>
    </div>
    <!-- Button -->
    <a
      href="#"
      class="hidden px-4 py-2 text-white bg-brightRed  baseline hover:bg-brightRedSupLight hover:text-brightRed md:block"
      >+Hire Me</a
    >

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
</div>
