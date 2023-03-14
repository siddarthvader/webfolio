<script lang="ts">
  function timeSince(since: number) {
    // birthday is a date
    var ageDifMs = Date.now();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - since);
  }

  type iDomainItem = {
    name: string;
    since: number;
  };

  const domains: iDomainItem[] = [
    {
      name: "Software Architecture",
      since: 2018,
    },
    {
      name: "CSS",
      since: 2014,
    },
    {
      name: "Javascript",
      since: 2014,
    },
  ];
</script>

<div class="p-6 h-[calc(100%-48px)] w-full bg-veryPaleRed ">
  <div class="p-4 text-4xl  z-10 page-title font-semibold">About Me</div>
  <div class="bg-white rounded-lg p-6 shadow-md flex flex-row">
    <div class="w-[69%]">
      <div class="p-2 text-zinc-700">
        <h1 class="text-2xl font-semibold  py-2">Hi, I am Siddharth</h1>
        Software Developer/Architect from India with {timeSince(2014)}
        years of experience writing Applications for web/mobile primarily. I have
        written fair amount of SaaS, Single Page applications using various frameworks,
        concurretnly maintaing the quality of code and keeping it clean, as much
        as the situation allowed. I have been working as a full time freelancer for
        {timeSince(2017)} years now and I got a chance to work on various technologies
        ranging from writing bare CSS to work on complex GIS applications.
      </div>
      <button
        class="bg-brightRed rounded-full px-4 py-1 text-white hover:bg-white hover:text-brightRed border-2 border-brightRed transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300"
        >Download CV</button
      >
    </div>
    <div class="w-[31%] px-4 border-l-2 border-veryPaleRed">
      {#each domains as domain}
        <h1 class="py-1 font-semibold text-zinc-500">{domain.name}</h1>
        <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
          <div class="w-full h-full bg-gray-200 absolute" />
          <div class="h-full bg-brightRed absolute" style="width:10%" />
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
</style>
