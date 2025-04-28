<script lang="ts">
  export let post: {
    title: string;
    excerpt: string;
    publishDate: string;
    image: string;
    category: string;
    author: string;
    tags: string[];
    content: string[];
  };
</script>

<article class="mt-4 p-4 bg-white rounded shadow max-w-3xl mx-auto">
  <h1 class="text-4xl font-bold">{post.title}</h1>
  <p class="text-sm text-gray-500 mt-1">{post.publishDate} · {post.author} · {post.category}</p>
  <p class="mt-4 text-xl italic text-gray-600">{post.excerpt}</p>
  <div class="mt-6 space-y-4 text-gray-700">
    {#each post.content as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>
  <div class="mt-6 flex flex-wrap gap-2">
    {#each post.tags as tag}
      <span class="bg-gray-200 text-gray-600 px-2 py-1 rounded">{tag}</span>
    {/each}
  </div>
</article>
