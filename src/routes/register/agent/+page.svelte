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
  <div class="flex flex-col gap-1 ">
    <label class=" font-bold" for="type">Profession</label>
    <select
      class="w-full px-3 py-2 leading-tight border rounded bg-white shadow focus:shadow-outline focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none"
      id="type"
      name="type"
      required
    >
      <option value="" disabled selected hidden />
      <option value="Baby-sitting">Baby-sitting</option>
      <option value="Electricité">Electricité</option>
      <option value="Jardinage">Jardinage</option>
      <option value="Ménage</">Ménage</option>
      <option value="Plomberie">Plomberie</option>
      <option value="Cours particuliers">Cours particuliers</option>
    </select>
  </div>
  <div class="flex flex-col gap-1 ">
    <label for="governorate" class="font-bold">Gouvernorat</label>
    <select
      class="w-full px-3 py-2 leading-tight border bg-white rounded shadow focus:shadow-outline focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none"
      id="governorate"
      name="governorate"
      required
    >
      <option value="" disabled selected hidden>Gouvernorat</option>
      <option value="Ariana">Ariana</option>
      <option value="Béja">Béja</option>
      <option value="Ben Arous">Ben Arous</option>
      <option value="Bizerte">Bizerte</option>
      <option value="Gabès">Gabès</option>
      <option value="Gafsa">Gafsa</option>
      <option value="Jendouba">Jendouba</option>
      <option value="Kairouan">Kairouan</option>
      <option value="Kasserine">Kasserine</option>
      <option value="Kébili">Kébili</option>
      <option value="Kef">Kef</option>
      <option value="Mahdia">Mahdia</option>
      <option value="Manouba">Manouba</option>
      <option value="Médenine">Médenine</option>
      <option value="Monastir">Monastir</option>
      <option value="Nabeul">Nabeul</option>
      <option value="Sfax">Sfax</option>
      <option value="Sidi Bouzid">Sidi Bouzid</option>
      <option value="Siliana">Siliana</option>
      <option value="Sousse">Sousse</option>
      <option value="Tataouine">Tataouine</option>
      <option value="Tozeur">Tozeur</option>
      <option value="Tunis">Tunis</option>
      <option value="Zaghouan">Zaghouan</option>
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
