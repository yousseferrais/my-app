<script lang="ts">
  import Input from "$components/Input.svelte";
  import Form from "$components/Form.svelte";
  import type { ActionData } from "./$types";
  export let form: ActionData;
</script>

<Form submitButton="S'inscrire">
  <Input label="Prénom" type="text" name="firstname" maxlength={32} />
  <Input label="Nom" type="text" name="lastname" maxlength={32} />
  <div class="flex flex-col gap-1 ">
    <label for="gender" class="font-bold"> Je suis </label>
    <select
      name="gender"
      id="gender"
      class="w-full px-3 py-2 leading-tight border rounded shadow bg-white focus:shadow-outline focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none"
    >
      <option value="" disabled selected hidden>Une femme / Un homme</option>
      <option value="f">Une femme</option>
      <option value="m">Un homme</option>
    </select>
  </div>
  <Input
    label="Numéro de téléphone"
    type="text"
    name="phone"
    maxlength={8}
    pattern="[0-9]+"
  />
  <Input
    label="Adresse"
    type="text"
    name="address"
    maxlength={64}
    isLarge={true}
  />
  <Input
    label="E-mail"
    type="email"
    name="email"
    maxlength={64}
    isLarge={true}
  />
  <Input label="Mot de passe" type="password" name="password" maxlength={32} />
  <Input
    label="Confirmer le mot de passe"
    type="password"
    name="passwordConfirmation"
    maxlength={32}
  />
  <p class="text-red-500 col-span-2">
    {#if form?.usedEmail}
      Email déja utilisé
    {/if}
    {#if form?.unmatchingPassword}
      Mot de passe incorrect
    {/if}
  </p>
</Form>
