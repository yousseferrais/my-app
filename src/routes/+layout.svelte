<script>
  import "../app.css";
  import { user } from "$stores/user";
</script>

<header>
  {$user?.firstname}
  {$user}
</header>
<main class="flex-1 flex flex-col justify-center items-center">
  <slot />
</main>
