<script lang="ts">
  import { faLink } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { TimeLine } from "../data/constants";
</script>

<div class="relative col-span-12 px-4 space-y-6 ">
  <div
    class="col-span-12 space-y-12 relative px-4 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-zinc-400"
  >
    {#each TimeLine as item}
      <div
        class="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-brightRed"
      >
        <h3 class="text-xl font-semibold tracking-wide">{item.title}</h3>
        <time class="text-xs tracking-wide uppercase dark:text-gray-400"
          >{item.time}</time
        >
        <p class="mt-3">
          {item.description}
        </p>
        <div class="flex xl:flex-row flex-col items-start">
          {#if item?.link?.length > 0}
            {#each item.link as link}
              <a
                href={link.link}
                target="_blank"
                rel="noreferrer"
                class="flex flex-row items-center px-1 mt-1 bg-white  rounded-sm  text-brightRed  text-xs border-white border mr-2 "
              >
                <span class="mr-1"> {link && link.text}</span>
                <Fa icon={faLink} size="sm" />
              </a>
            {/each}
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
