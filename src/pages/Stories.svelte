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

<div class="xl:p-4 p-4 h-full xl:h-[calc(100%-48px)] w-full bg-veryPaleRed">
  <div class="xl:p-4 p-2 text-2xl xl:text-4xl z-10 page-title font-semibold">
    Stories
  </div>
  <div class="w-full md:w-[60%] m-auto space-y-8">
    <div id="substack-feed-embed" />
  </div>
</div>

<style global lang="scss">
  .substack-feed-widget {
    background: none !important;
  }
  .substack-feed-widget > a {
    margin-top: 16px;
    background: white !important;
    border-radius: 4px;
    border: solid 1px white;
    padding: 8px;
  }
</style>
