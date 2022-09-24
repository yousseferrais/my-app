<script lang="ts">
  import { user } from "$src/stores/user";
  import type { PageOutputData } from "./$types";

  export let data: PageOutputData;
  let password = "";
  let incorrectPassword = false;
  let isLogged = false;
</script>

<div
  class="px-8 pt-6 pb-8 w-full flex flex-col items-center text-xl max-w-2xl bg-white text-gray-700 rounded-lg gap-4"
>
  {#if isLogged}
    <span>Connexion réussie </span>
    <a href="../../../">Consulter ses</a>
    <a href="../../../service-selection">Nouvelle demande</a>
  {:else}
    <span>Bienvenue</span>
    <span>{data.agent?.firstname} {data.agent?.lastname}</span>
    <div class="flex gap-1 flex-col">
      <label for="password" class="font-bold">Mot de Passe</label>
      <input
        maxlength="32"
        name="password"
        required
        type="password"
        class="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="password"
        placeholder="Mot de Passe"
        bind:value={password}
      />
    </div>
    {#if incorrectPassword}
      <span class="text-red-500"
        >Mot de passe incorrect. Veuillez réessayer</span
      >
    {/if}
    <button
      class="col-span-2 w-max place-self-center px-16 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      on:click={() => {
        if (password == data.password) {
          $user = data.agent;
          alert("ok");
          isLogged = true;
        } else {
          incorrectPassword = true;
        }
      }}>Suivant</button
    >
  {/if}
</div>
