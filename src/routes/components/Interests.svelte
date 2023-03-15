<script>
  import Fa from "svelte-fa";
  import { InterestList } from "../data/constants";
</script>

<div class="text-2xl font-light  text-brightRed mt-4">My Interests</div>
<div class="p-4">
  {#each InterestList as interest}
    <Fa class="text-darkGrayishBlue m-2" icon={interest.icon} size="lg" />
  {/each}
</div>
