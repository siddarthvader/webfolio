<script>
  import Fa from "svelte-fa";
  import { InterestList } from "../data/constants";
  // function mouseOverFn(e) {
  //   const x = e.pageX - e.currentTarget.offsetLeft;
  //   const y = e.pageY - e.currentTarget.offsetTop; //y position within the element.
  //   console.log("Left? : " + x + " ; Top? : " + y + ".");
  // }
</script>

<!-- <div class="text-2xl font-light  text-brightRed mt-4">My Interests</div> -->
<div class="p-4 flex flex-wrap justify-center">
  <ul
    class="flex  flex-wrap max-w-xl justify-center align-center gap-2 leading-8"
  >
    {#each InterestList as interest}
      <li>
        <div
          class={` text-brightRed text-${interest.size} hover-up hover:text-white cursor-arrow`}
        >
          {interest.name}
        </div>
      </li>
      <!-- <Fa class="text-brightRed m-2" icon={interest.icon} size="lg" /> -->
    {/each}
  </ul>
</div>

<style lang="scss">
  .hover-up {
    background: linear-gradient(
      white,
      white 50%,
      hsl(12, 88%, 59%) 50%,
      hsl(12, 88%, 69%)
    );
    background-size: 100% 200%;
    /*trasition effect for background*/
    transition: background 300ms;
    &:hover {
      background-position: 100% 100%;
    }
  }
</style>
