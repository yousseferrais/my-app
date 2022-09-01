<script lang="ts">
  import Input from "$components/Input.svelte";
</script>

<form
  class="grid grid-cols-2 w-full text-xl max-w-2xl  flex-col mx-auto gap-4 mt-48 bg-black bg-opacity-50 p-4 rounded-lg  "
  action="#"
>
  <Input label="Nom :" type="text" name="lastName" flexcol={true} />
  <Input label="Prénom :" type="text" name="firstName" flexcol={true} />
  <div class="flex flex-col gap-1 ">
    <label for="gender" class="text-white">Je suis :</label>
    <select name="gender" id="gender" class="flex-1">
      <option value="" disabled selected hidden />
      <option value="male">un homme</option>
      <option value="female">une femme</option>
    </select>
  </div>

  <Input label="Adresse :" type="text" name="location" flexcol={true} />
  <Input
    label="E-mail :"
    type="email"
    name="email"
    placeHolder="flen.benfalten@gmail.com"
    flexcol={true}
  />
  <Input
    label="Numéro de téléphone :"
    type="text"
    name="phone"
    flexcol={true}
  />
  <Input
    label="Mot de passe :"
    type="password"
    name="password"
    flexcol={true}
  />
  <Input
    label="Confirmer le mot de passe :"
    type="password"
    name="passwordConfirmation"
    flexcol={true}
  />
  <input
    class="border-2 col-span-2 w-max place-self-center border-neutral-800 px-5 self-center bg-white "
    type="submit"
    value="S'inscrire"
  />
</form>
