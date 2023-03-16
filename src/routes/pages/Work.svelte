<script lang="ts">
  import {
    faChartLine,
    faExternalLink,
    faLink,
  } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { WorkCategory, WorkList } from "../data/constants";
  let selectedCategory: string = "All";
</script>

<div class="p-6 h-[calc(100%-48px)] w-full bg-veryPaleRed">
  <div class="p-4 text-4xl  z-10 page-title font-semibold">Work</div>
  <div />
  <div class="flex flex-row space-x-4 p-6">
    {#each WorkCategory as cat}
      <div
        class="font-semibold text-xl cursor-pointer hover:text-brightRed {selectedCategory ==
        cat
          ? 'text-brightRed'
          : 'text-zinc-600'}"
      >
        {cat}
      </div>
    {/each}
  </div>
  <div class="flex flex-row flex-wrap p-4">
    {#each WorkList as work}
      <div
        class=" bg-white rounded-lg hover:shadow-xl text-zinc-600 w-[320px] h-[320px]  cursor-pointer relative group hover-up m-4"
      >
        <div
          class="flex flex-col justify-between group-hover:hidden h-full w-full"
        >
          <div class="font-semibold text-2xl p-3">{work.title}</div>
          <Fa icon={work.icon} size={"10x"} />
          <div class="flex flex-row flex-wrap self-end  p-2">
            {#each work.techList as tech}
              <div
                class="px-1 mt-1 bg-brightRed shadow-md no-underline rounded-sm bg-blue text-white  text-xs border-brightRed border mr-2 "
              >
                {tech}
              </div>
            {/each}
          </div>
        </div>
        <div
          class="text-white group-hover:flex absolute top-0 left-0 w-full h-full hidden flex-col justify-between"
        >
          <div class="flex flex-row justify-between items-center px-4">
            <div
              class="rounded-bl-md rounded-br-md bg-white px-2 text-zinc-500 text-sm font-semibold"
            >
              {work.category.join(", ")}
            </div>
          </div>
          <div class="p-2 px-4 text-justify">
            {work.description}
          </div>

          <div class="flex flex-row flex-wrap self-end p-2 px-4">
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
    {/each}
  </div>
</div>
