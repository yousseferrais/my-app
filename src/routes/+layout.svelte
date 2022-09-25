<script lang="ts">
  import { user } from "$src/stores/user";
  import "../app.css";
</script>

{#if $user}
  <header
    class=" flex py-1 bg-white shadow-lg border-b border-blue-400 justify-between text-lg"
  >
    <span
      class="inline-block no-underline hover:text-black font-medium py-2 px-4 "
      >Bonjour {$user.firstname} {$user.lastname}</span
    >
    <nav class="flex items-center justify-between text-base text-blue-600">
      <a
        href="/"
        class="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100"
        >Changer de compte</a
      >
    </nav>
  </header>
{/if}
<main class="flex-1 flex flex-col justify-center items-center">
  <slot />
</main>
