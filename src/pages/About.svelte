<script lang="ts">
  import Interests from "../components/Interests.svelte";
  import Timeline from "../components/Timeline.svelte";

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

<div
  class="xl:p-4 p-4  xl:h-[calc(100%-48px)] h-full w-full bg-veryPaleRed flex flex-col"
>
  <div class="p-2 xl:p-4 text-2xl xl:text-4xl z-10 page-title font-semibold">
    About Me
  </div>
  <div class="flex lg:flex-row flex-col overflow-scroll h-full">
    <div class="xl:p-4 p-2 flex lg:flex-row flex-col lg:w-[60%] w-[100%]">
      <div class="xl:w-[93%] w-full">
        <div class="p-2 text-zinc-700">
          <div class="text-xl lg:text-2xl font-semibold  text-brightRed">
            Hi, I am Siddharth
          </div>
          <div class="text-zinc-600 text-xl lg:text-4xl font-bold py-2">
            I make things work. <span class="typewriter" />
          </div>
          <div class="pt-2">
            Software Developer/Architect from India with {timeSince(2014)}
            years of experience writing web/mobile apps primarily. I have been working
            as a full time freelancer for
            {timeSince(2017)} years and I worked on technologies ranging from writing
            bare CSS to work on complex data driven applications.
          </div>
        </div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.dropbox.com/s/zqfimh2q624txzw/CV.pdf?dl=0"
          download="Siddharth_Resume.pdf"
          class="bg-brightRed rounded-full px-4 py-1 text-white hover:bg-white hover:text-brightRed border-2 border-brightRed transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300"
          >Download CV</a
        >
        <hr class="my-6 h-0.5 border-t-0 bg-zinc-400" />
        <Interests />
      </div>
    </div>
    <hr class="my-6 h-0.5 border-t-0 bg-zinc-400 xl:hidden" />
    <div
      class="p-2 xl:p-4 lg:w-[40%] w-[100%] lg:overflow-y-scroll lg:max-h-[100%] lg:h-full"
    >
      <Timeline />
    </div>
  </div>
</div>

<style lang="scss">
  /* Typewriter effect 1 */
  @keyframes typing {
    0.0000%,
    27.3488% {
      content: "";
    }
    1.1395%,
    26.2093% {
      content: "D";
    }
    2.2791%,
    25.0698% {
      content: "De";
    }
    3.4186%,
    23.9302% {
      content: "Dev";
    }
    4.5581%,
    22.7907% {
      content: "Deve";
    }
    5.6977%,
    21.6512% {
      content: "Devel";
    }
    6.8372%,
    20.5116% {
      content: "Develo";
    }
    7.9767%,
    19.3721% {
      content: "Develop";
    }
    9.1163%,
    18.2326% {
      content: "Develope";
    }
    10.2558%,
    17.0930% {
      content: "Developer";
    }

    30.7674%,
    60% {
      content: "";
    }

    32%,
    59.60% {
      content: "D";
    }

    33.25%,
    58.25% {
      content: "Di";
    }
    34.5%,
    57% {
      content: "Dis";
    }
    35.75%,
    55.75% {
      content: "Disc";
    }
    37%,
    54.5% {
      content: "Disc ";
    }
    38.25%,
    53.25% {
      content: "Disc J";
    }
    39.5%,
    52% {
      content: "Disc Jo";
    }
    40.75%,
    51.75% {
      content: "Disc Joc";
    }
    42%,
    50.5% {
      content: "Disc Jock";
    }
    43.25%,
    49.25% {
      content: "Disc Jock";
    }
    44.5%,
    48% {
      content: "Disc Jocke";
    }
    45.75%,
    46.75% {
      content: "Disc Jockey";
    }

    61%,
    100% {
      content: "";
    }
    62.4%,
    98.6% {
      content: "S";
    }
    63.8%,
    97.2% {
      content: "Sc";
    }
    65.2%,
    95.8% {
      content: "Sci";
    }
    66.6%,
    94.4% {
      content: "Sci-f";
    }
    68%,
    93% {
      content: "Sci-fi";
    }
    69.4%,
    91.6% {
      content: "Sci-fi";
    }
    70.8%,
    90.2% {
      content: "Sci-fi W";
    }
    72.2%,
    88.8% {
      content: "Sci-fi Wr";
    }
    73.6%,
    87.4% {
      content: "Sci-fi Wri";
    }
    75%,
    86% {
      content: "Sci-fi Writ";
    }
    76.4%,
    84.4% {
      content: "Sci-fi Write";
    }
    77.8%,
    83% {
      content: "Sci-fi Writer";
    }
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .typewriter {
    --caret: currentcolor;
  }

  .typewriter::before {
    content: "";
    animation: typing 13.5s infinite;
  }

  .typewriter::after {
    content: "";
    border-right: 1px solid var(--caret);
    animation: blink 0.5s linear infinite;
  }

  @media (prefers-reduced-motion) {
    .typewriter::after {
      animation: none;
    }

    @keyframes sequencePopup {
      0%,
      100% {
        content: "developer";
      }
      25% {
        content: "writer";
      }
      50% {
        content: "reader";
      }
      75% {
        content: "human";
      }
    }

    .typewriter::before {
      content: "developer";
      animation: sequencePopup 12s linear infinite;
    }
  }
</style>
