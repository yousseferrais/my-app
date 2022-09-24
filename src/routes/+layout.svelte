<script lang="ts">
  import "../app.css";
  import { user } from "$stores/user";
</script>

<header><a href="/">Home </a></header>
<main class="flex-1 flex flex-col justify-center items-center">
  <slot />
</main>
