<script lang="ts">
  import Input from "$components/Input.svelte";
  import Form from "$src/components/Form.svelte";
</script>

<Form submitButton="S'inscrire">
  <Input label="Nom" type="text" name="lastName" flexcol={true} />
  <Input label="Prénom" type="text" name="firstName" flexcol={true} />
  <div class="flex flex-col gap-1 ">
    <label for="gender" class="block mb-2 font-bold text-gray-700">
      Je suis
    </label>
    <select
      name="gender"
      id="gender"
      class="w-full px-3 py-2 leading-tight bg-white text-gray-700 border rounded shadow  focus:outline-none focus:shadow-outline"
    >
      <option value="" disabled selected hidden />
      <option value="1">Un homme</option>
      <option value="0">Une femme</option>
    </select>
  </div>
  <Input
    label="Date de naissance"
    type="date"
    name="birthDate"
    flexcol={true}
  />

  <Input label="Adresse" type="text" name="address" flexcol={true} />
  <Input label="E-mail" type="email" name="email" flexcol={true} />
  <Input label="Numéro de téléphone" type="text" name="phone" flexcol={true} />
  <Input label="Mot de passe" type="password" name="password" flexcol={true} />
</Form>
