<script lang="ts">
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
        class=" bg-white rounded-lg hover:shadow-xl text-zinc-600 w-[320px] h-[320px] flex flex-col cursor-pointer relative group"
      >
        <div class="font-semibold text-xl py-2 px-2">{work.title}</div>
        <div class=" p-2">
          {work.description}
        </div>
        <div class="flex flex-row flex-wrap self-end mt-auto p-2">
          {#each work.techList as tech}
            <div
              class="px-1 mt-1 bg-brightRed shadow-md no-underline rounded-sm bg-blue text-white  text-xs border-brightRed border mr-2 "
            >
              {tech}
            </div>
          {/each}
        </div>
        <div
          class="invisible group-hover:visible  absolute w-full h-full bg-brightRed bg-opacity-30 p-2 transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        >
          <div class="bg-brightRed p-2 rounded-bl-sm rounded-br-sm">
            All, Front-end
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
