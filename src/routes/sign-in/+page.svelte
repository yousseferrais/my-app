<form
  class="grid grid-cols-2 mt-52 gap-y-2 gap-x-4 w-full max-w-xl border-2 mx-auto p-3 "
  action="#"
>
  <label for="email">E-mail :</label>
  <label for="mot">Mot de passe :</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="flen@gmail.com"
    required
  />
  <input type="password" id="mot" name="mot" required />

  <input
    class="col-span-2 border-2 w-max px-2 py-1 rounded-xl place-self-center bg-slate-400  hover:bg-red-900 hover:text-white"
    type="submit"
    value="Se connecter"
  />
</form>
