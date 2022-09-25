<script lang="ts">
  import Service from "$components/Service.svelte";
  import type { PageOutputData } from "./$types";
  export let data: PageOutputData;
</script>

{#if data.services.length}
  <table
    class="text-center  text-lg font-semibold bg-white border-collapse border"
  >
    <thead class="bg-blue-600 text-white">
      <th class="px-5 py-3">Service désiré</th>
      <th class="px-5 py-3">Budget</th>
      <th class="px-5 py-3">Date</th>
      <th class="px-5 py-3">Adresse</th>
      <th class="px-5 py-3">Annulation</th>
    </thead>
    <tbody>
      {#each data.services as service}
        <Service {service} />
      {/each}
    </tbody>
  </table>
{:else}
  <span>Vous n'avez rien encore publier</span>
{/if}
<a href="/service-selection">Créer une nouvelle demande</a>
