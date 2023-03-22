<svelte:head>
  <script src="https://substackapi.com/embeds/feed.js" async></script>

  <script>
    window.SubstackFeedWidget = {
      substackUrl: "punkhaa.substack.com",
      posts: 3,
      colors: {
        primary: "#F25F3A",
        secondary: "#52525B",
        background: "#FFEFEB",
      },
    };
  </script>
</svelte:head>

<div class="p-6 h-[calc(100%-48px)] w-full bg-veryPaleRed">
  <div class="p-4 text-4xl  z-10 page-title font-semibold">Stories</div>
  <div class="w-[40%] m-auto space-y-4">
    <div id="substack-feed-embed" />
  </div>
</div>
