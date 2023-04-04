<script lang="ts">
  import { faLink } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import {
    WorkCategory,
    WorkList,
    type WorkCategoryOption,
  } from "../data/constants";

  import { flip } from "svelte/animate";
  import { crossfade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  const [send, receive] = crossfade({
    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;
      return {
        css: (t) => `transform: ${transform} scale(${t}); opacity: ${t}`,
      };
    },
  });

  let selectedCategory: WorkCategoryOption = "Front-end";

  function changeCat(newCat: WorkCategoryOption) {
    selectedCategory = newCat;
  }
</script>

<div
  class="xl:p-4 p-2 h-full xl:h-[calc(100%-48px)] w-full bg-veryPaleRed flex flex-col z-1"
>
  <div class="xl:p-4 p-2 xl:text-4xl text-2xl z-10 page-title font-semibold">
    Work
  </div>
  <div />
  <div class="flex flex-row xl:p-4 p-2 flex-wrap">
    {#each WorkCategory as cat}
      <button
        class="mr-4 font-semibold text-sm xl:text-xl cursor-pointer {selectedCategory ==
        cat
          ? 'text-brightRed'
          : 'text-zinc-600'}"
        on:click={() => changeCat(cat)}
      >
        {cat}
      </button>
    {/each}
  </div>
  <div
    class="flex flex-row flex-wrap p-4 h-full xl:h-full overflow-y-scroll z-1"
  >
    {#each WorkList.filter( (w) => w.category.includes(selectedCategory) ) as work (work.id)}
      <div
        in:receive={{ key: work.id }}
        out:send|local={{ key: work.id }}
        animate:flip={{ duration: 600, easing: quintOut }}
        class=" bg-white rounded-lg hover:shadow-xl text-zinc-600 w-[90%] xl:w-[60%] h-auto max-h-[320px] xl:h-[240px] mx-auto  cursor-pointer relative group m-4 work-box overflow-hidden"
      >
        <div class="flex flex-col justify-between h-full w-full">
          <div class="flex items-center justify-between xl:flex-row flex-col">
            <div
              class="font-semibold text-xl xl:text-2xl p-2 flex-1 self-start"
            >
              {work.title}
            </div>
            <div
              class="text-white w-full h-full flex-1 hidden xl:flex flex-row flex-wrap self-end p-2 px-4 justify-end"
            >
              {#each work.link as tech}
                <a
                  href={tech.link}
                  target="_blank"
                  rel="noreferrer"
                  class="flex flex-row items-center px-1 mt-1 bg-white  rounded-sm  text-brightRed  text-xs border-white border mr-2 "
                >
                  <span class="mr-1"> {tech.text}</span>
                  <Fa icon={faLink} size="sm" />
                </a>
              {/each}
            </div>
          </div>

          <div class="p-2 px-4 text-justify flex-1">
            {work.description}
          </div>

          <div class="flex items-center justify-between xl:flex-row flex-col">
            <div
              class="hidden xl:flex flex-row justify-between items-center px-4"
            >
              <div
                class="rounded-bl-md rounded-br-md bg-white px-2 text-zinc-500 text-sm font-semibold"
              >
                {work.category.join(", ")}
              </div>
            </div>

            <div class="flex flex-row flex-wrap self-end  p-2">
              {#each work.techList as tech}
                <div
                  class="px-1 mt-1 bg-brightRed shadow-md no-underline rounded-sm bg-blue text-white  text-xs border-brightRed border mr-2 "
                >
                  {tech}
                </div>
              {/each}
            </div>
            <div class="xl:hidden flex items-center self-start pb-2">
              {#each work.link as tech}
                <a
                  href={tech.link}
                  target="_blank"
                  rel="noreferrer"
                  class="flex flex-row items-center px-1 mt-1 bg-white  rounded-sm  text-brightRed  text-xs border-white border mr-2 "
                >
                  <span class="mr-1"> {tech.text}</span>
                  <Fa icon={faLink} size="sm" />
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  // .work-box:hover {
  //   .cat-hover {
  //     transform: translateY(0px);
  //     opacity: 1;
  //   }
  // }
  // .cat-hover {
  //   opacity: 0;
  //   transform: translateY(-40px);
  //   transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 400ms;
  // }
</style>
