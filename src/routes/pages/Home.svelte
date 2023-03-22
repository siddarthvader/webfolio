<script lang="ts">
  import Parallax, { parallaxFn } from "../components/Parallax.svelte";

  import Fa from "svelte-fa";
  import { SubMenuList, type DayStatus } from "../data/constants";
  import { onMount } from "svelte";
  import SunCalc from "suncalc3";

  // onMount(() => {
  //   if (window.navigator.geolocation) {
  //     // Geolocation available
  //     // console.log("window.", window.navigator.geolocation);

  //     let coords;
  //     window.navigator.geolocation.getCurrentPosition((c) => {
  //       coords = c.coords;

  //       let times = SunCalc.getSunTimes(
  //         new Date(),
  //         coords.latitude,
  //         coords.longitude
  //       );

  //       const { sunriseStart, sunsetEnd } = times;

  //       const dayDuration: number = Math.floor(
  //         Math.abs(sunsetEnd.value.getTime() - sunriseStart.value.getTime()) /
  //           3600000
  //       );

  //       console.log(dayStatus());

  //       function dayStatus(): DayStatus {
  //         const currentTime: Date = new Date();

  //         if (
  //           currentTime < sunriseStart.value ||
  //           currentTime > sunsetEnd.value
  //         ) {
  //           return { status: "night" };
  //         }
  //         return { status: "day" };
  //       }
  //       const sunPosition = SunCalc.getPosition(
  //         new Date(),
  //         coords.latitude,
  //         coords.longitude
  //       );
  //       const moonPosition = SunCalc.getMoonPosition(
  //         new Date(),
  //         coords.latitude,
  //         coords.longitude
  //       );

  //       console.log("sun position is.., ", sunAlt, sunAzi);
  //       console.log("moon position is.., ", moonAlt, moonAzi);

  //       console.log("times are ..", times);
  //       console.log("sunPosition are...", sunPosition);
  //       console.log("moonPosition is..", moonPosition);
  //     }, console.log);
  //   }
  // });
</script>

<div
  class="text-white z-10 relative text-center text-3xl 
flex flex-col justify-center align-center h-full w-full"
>
  <div class="p-4 font-light text-4xl  ">Siddharth's Portfolio</div>
  <div class="p-2 font-semibold text-xl  ">I am a freelancer</div>
  <div class="flex p-4" />
  <div class="w-6/12 mx-auto flex justify-center ">
    {#each SubMenuList as smenu}
      <a
        class="px-4 cursor-pointer"
        href={smenu.link}
        target="_blank"
        rel="noreferrer"
      >
        <Fa icon={smenu.icon} />
      </a>
    {/each}
  </div>
  <div class="justify-center flex pt-4 ">
    <button
      class="text-sm text-white rounded-full  baseline py-2 px-4 m-4  border-white border hover:border-brightRed hover:bg-white hover:text-brightRed"
      >Contact Me
    </button>
  </div>
</div>
<Parallax />
