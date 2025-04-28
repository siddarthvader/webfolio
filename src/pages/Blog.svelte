<script lang="ts">
  import BlogPost from './BlogPost.svelte';
  
  type BlogPost = {
    id: string;
    title: string;
    excerpt: string;
    publishDate: string;
    category: string;
    author: string;
    tags: string[];
    content: string[];
  };
  
  const blogPosts: BlogPost[] = [
    {
      id: "upwork-4000-hours",
      title: "4,000 Hours on Upwork and Counting, Looking Back",
      excerpt: "A candid, tongue-in-cheek reflection on 4,000 hours of freelancing on Upwork, no boasting, we dont do that here, just real talk with a splash of humor.",
      publishDate: "April 28, 2024",
      category: "Freelancing",
      author: "Siddharth",
      tags: ["upwork", "freelancing", "web-development", "philosophy", "freelancers"],
      content: [
        "Completing 4000 hours on upwork is not a mountaintop i ever thought i would climb but here we are. It does not really matter in the hindsight but it matters today and it mattered for whole last 7 years when i really dived deeper into unknown codebases and worked my way out (sometimes i did not), we all fail sometimes and i would say its necessary to fail so next time we find something else to trip over, its a lot of fun.",
        "If there is one essential truth i have found about life in general its funny in hindsight, i remember 7 and half years ago when I quit my well paying job in a startup that sucked my blood 6 times and week (12 hours a day) and taught me a lot of things (AngularJS, rolling ciggarettes etc) I did not even have a laptop. I exactly remember the moment I had quit my job, moved to a new city and I thought i would start building a startup with my friend and I will ask the company guys to let me keep the laptop(how ridiculous) and getting done with all the prerequisites i sat down to work on this fancy saas app i realized i dont have a laptop (ofcourse they asked me to submit the beloved laptop on the last day), I was devastated but that did not last long one friend of mine helped me buy a lenovo laptop from his credit card and I would say that was the defining moment of this era that has not began, it was a very good laptop and i would crash it 3 times every week fighting linux.",
        "Then we started working on our fancy PWA saas, as someone recently worked at cutting edge startup i would say we dont need native apps Progressive Web Apps are all we need (in my defence it was 2018), i made 10 commits over the course of like 3 months and realized this is going to bring me to the streets and everybody around me is going to suffer so i signed up for Upwork and It changed everything for me.",
        "It was very hard in the beginning I did some soul crushing all nigheters for long long weeks and got paid pennies but it was enough, i did not have much needs, i could go on and I did. After 6 months of this I made a breakthrough, i found a guy who wanted me to write this application in AngularJS and was ready to pay me 1500USD per month, if i were a great poet i would be able to express how that day made me feel, i am not but it felt pretty awesome.",
        "And you can assume how it went from there, hour by hour, commit by commit we moved, i actually took 3 years hiatus and went on autopilot during covid but with emergence of AI i was back, i found the joy of programming back and its been 2 and half years again since then.",
        "I found more clients, i discovered svelte/kit and mithril.js and i fell in love with the tech over and over again, i worked with good teams, bad teams and in the end when all of that had passed I was there, i still am.",
        "I think it should be possible to finish 10000 hours on upwork, i really want to see how life will look like once i have done that, I am going to leave this half baked post on internet only to reference it back once i have done that.",
        "To be continued"
      ]
    }
  ];
  
  let selectedPost: BlogPost | null = null;
</script>

<div class="xl:p-4 p-2 h-full xl:h-[calc(100%-48px)] w-full bg-veryPaleRed flex flex-col z-1 overflow-auto">
  <div class="xl:p-4 p-2 xl:text-4xl text-2xl z-10 page-title font-semibold">Blog</div>
  
  {#if selectedPost}
    <div class="mt-4 max-w-3xl mx-auto w-full">
      <button 
        class="mb-4 px-3 py-1 bg-white rounded shadow hover:bg-gray-100 transition-colors" 
        on:click={() => selectedPost = null}
      >
        ← Back to posts
      </button>
      <BlogPost post={selectedPost} />
    </div>
  {:else}
    <div class="mt-4 grid gap-6 max-w-3xl mx-auto w-full">
      {#each blogPosts as post}
        <div class="p-4 bg-white rounded shadow cursor-pointer hover:shadow-md transition-shadow" on:click={() => selectedPost = post}>
          <h2 class="text-2xl font-bold">{post.title}</h2>
          <p class="text-sm text-gray-500 mt-1">{post.publishDate} · {post.author} · {post.category}</p>
          <p class="mt-3 text-gray-600">{post.excerpt}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            {#each post.tags.slice(0, 3) as tag}
              <span class="bg-gray-200 text-gray-600 px-2 py-1 text-sm rounded">{tag}</span>
            {/each}
            {#if post.tags.length > 3}
              <span class="bg-gray-200 text-gray-600 px-2 py-1 text-sm rounded">+{post.tags.length - 3} more</span>
            {/if}
          </div>
          <div class="mt-3 text-blue-500 hover:underline">Read more →</div>
        </div>
      {/each}
    </div>
  {/if}
</div>