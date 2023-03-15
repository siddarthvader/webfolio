<script lang="ts">
  const timeline = [
    {
      title: "Freelancer",
      time: "March 2017 - Now",
      description:
        "I have written fair amount of SaaS, Single Page applications using various frameworks, concurretnly maintaing the quality of code and keeping it clean, as much as the situation allowed.",
    },
    {
      title: "Lead Developer",
      time: "Jan 2016 - March 2017",
      description:
        "I worked on a Learning Management System, where I wrote admin panel for a system helping University teachers/students.",
    },
    {
      title: "Junior Developer",
      time: "Jan 2014 - Dec 2016",
      description:
        "I was a junior developer for a FinTech, I was mostly writing Jquery day-in day out, It was fun while it lasted.",
    },
    {
      title: "College Guy",
      time: "July 2010- July 2014",
      description:
        "I started writing code in College and I listened to a lot of Rock music and I managed crowd and teams.",
    },
    {
      title: "Random Person ",
      time: "Jan 1993- July 2010",
      description:
        "I was a very random person, interested in a lot of things and ended up joining Engineering college.",
    },
  ];
</script>

<div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
  <div
    class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-zinc-400"
  >
    {#each timeline as item}
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-brightRed"
      >
        <h3 class="text-xl font-semibold tracking-wide">{item.title}</h3>
        <time class="text-xs tracking-wide uppercase dark:text-gray-400"
          >{item.time}</time
        >
        <p class="mt-3">
          {item.description}
        </p>
      </div>
    {/each}
  </div>
</div>
