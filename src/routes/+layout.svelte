<script lang="ts">
  import { user } from "$src/stores/user";
  import "../app.css";
</script>

<header class="justify-between flex">
  {#if $user}
    <span>Bonjour {$user.firstname} {$user.lastname}</span>
    <nav>
      {#if "profession" in $user}
        <a href={"/job-offers/" + $user.id}>Mes offres</a>
      {:else}
        <a href={"/service-requests/" + $user.id}>Consulter ses</a>
        <a href="/service-selection">Nouvelle demande</a>
      {/if}
      <button
        on:click={() => {
          $user = null;
        }}>Se déconnecter</button
      >
    </nav>
  {:else}
    <a href="/">Se connecter</a>
  {/if}
</header>
<main class="flex-1 flex flex-col justify-center items-center">
  <slot />
</main>
