<script lang="ts">
  import { user } from "$stores/user";
  import Input from "$components/Input.svelte";
  import Form from "$components/Form.svelte";
  import type { ActionData } from "./$types";
  export let form: ActionData;
  let budget = 50;
</script>

{#if $user}
  <Form submitButton="Publier">
    <div class="flex flex-col gap-1 ">
      <label class=" font-bold" for="type">Service désiré</label>
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
    <div class="flex flex-col gap-1">
      <label class=" font-bold" for="budget">Budget</label>
      <div class="flex gap-2">
        <input
          bind:value={budget}
          class="flex-1 w-0 focus:shadow-outline focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none"
          max="150"
          min="20"
          required
          type="range"
        />
        <input
          bind:value={budget}
          class="text-right w-12 focus:shadow-outline focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none"
          id="budget"
          name="cost"
          pattern="[0-9]+"
          required
          type="text"
        />
        <span class="font-bold">DT</span>
      </div>
    </div>
    <Input label="Date" name="date" type="date" />
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
      isLarge={true}
      label="Adresse"
      maxlength={64}
      name="address"
      type="text"
    />
    <input type="number" name="clientId" required hidden value={$user.id} />
    <p class="text-red-500 col-span-2">
      {#if form?.datePassed}
        Mauvaise date
      {/if}
    </p>
  </Form>
{:else}
  Vous devez être connecté pour utiliser cette fonctionnalité
{/if}
