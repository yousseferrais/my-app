<script lang="ts">
  import Form from "$components/Form.svelte";
  import Input from "$components/Input.svelte";
  import { user } from "$stores/user";
  let budget = 50;
</script>

<Form submitButton="Publier">
  <div class="flex flex-col gap-1 ">
    <label class=" font-bold" for="">Service désiré :</label>
    <select
      name="service"
      id="service"
      class="w-full px-3 py-2 leading-tight bg-white border rounded shadow  focus:outline-none focus:shadow-outline"
    >
      <option value="" disabled selected hidden />
      <option value="baby-sitting">Baby-sitting</option>
      <option value="electricity">Electricité</option>
      <option value="gardening">Jardinage</option>
      <option value="housework">Ménage</option>
      <option value="plumbing">Plomberie</option>
      <option value="private_lessons">Cours particulier</option>
    </select>
  </div>
  <Input label="Date" name="date" type="date" />
  <Input
    label="Adresse"
    type="text"
    name="address"
    maxlength={64}
    isLarge={true}
  />
  <div class="flex flex-col gap-1 col-span-2">
    <label class=" font-bold" for="budget">Budget :</label>
    <div class="flex gap-2">
      <input
        type="range"
        min="20"
        max="150"
        bind:value={budget}
        class="flex-1"
      />
      <input
        class="text-right w-12 "
        id="budget"
        type="text"
        bind:value={budget}
      />
      <span class="font-bold">DT</span>
    </div>
  </div>
</Form>
<span>Veuillez vous connecter</span>
{$user}
