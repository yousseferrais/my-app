<script lang="ts">
  import { user } from "$stores/user";
  import Input from "$components/Input.svelte";
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";
  export let form: ActionData;
</script>

<form
  class="px-8 pt-6 pb-8 w-full flex flex-col text-xl max-w-2xl bg-white text-gray-700 rounded-lg gap-4"
  method="POST"
  use:enhance
>
  <Input label="Adresse e-mail" type="email" name="email" maxlength={64} />
  <input
    class="col-span-2 w-max place-self-center px-16 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
    type="submit"
    value="Suivant"
  />
  {#if form?.unexistentEmail}
    <span class="text-red-500 text-base">
      Impossible de trouver votre compte. Veuillez réessayer.
    </span>
  {/if}
  <span>
    Vous n’avez pas de compte ? <a
      href="/register/customer"
      class="text-blue-500 underline">Inscrivez-vous ici</a
    >
  </span>
</form>
<span>
  Êtes-vous un de nos agents ? <a
    href="/register/agent"
    class="text-blue-500 underline">Cliquez ici</a
  >
</span>
