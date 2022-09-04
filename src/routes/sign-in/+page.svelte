<script lang="ts">
  import Input from "$components/Input.svelte";
</script>

<form
  class="grid grid-cols-2 w-full text-xl max-w-xl  flex-col mx-auto gap-4 mt-48 bg-black bg-opacity-50 p-4 rounded-lg  "
  action="#"
>
  <Input
    label="E-mail :"
    type="email"
    name="email"
    placeHolder="flen.benfalten@gmail.com"
    flexcol={true}
  />
  <Input
    label="Mot de passe :"
    type="password"
    name="password"
    flexcol={true}
  />
  <input
    class="border-2 col-span-2 w-max place-self-center border-neutral-800 px-5 self-center bg-white "
    type="submit"
    value="Se connecter"
  />
</form>
