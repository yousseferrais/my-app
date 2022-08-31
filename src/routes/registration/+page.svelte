<form
  class="flex w-full  max-w-lg  flex-col mx-auto gap-6 mt-48 bg-black  bg-opacity-30  p-2 rounded-md  "
  action="#"
>
  <div class="flex gap-3">
    <div class="flex flex-col gap-1  w-1/2">
      <label for="firstname">Prénom :</label>
      <input
        class="border-2  border-neutral-800 px-2 "
        type="text"
        id="firstname"
        name="ftname"
        required
      />
    </div>
    <div class="flex flex-col gap-1  w-1/2">
      <label for="lastname">Nom :</label>
      <input
        class="border-2  border-neutral-800 px-2 "
        type="text"
        id="lastname"
        name="lname"
        required
      />
    </div>
  </div>
  <div class="flex gap-4  w-1/2">
    <label for="gender">Je suis : </label>
    <select name="gender" id="gender">
      <option value="" disabled selected hidden />
      <option value="male">un homme</option>
      <option value="female">une femme</option>
    </select>
  </div>

  <div class="flex  gap-1  w-full">
    <label for="location">Adresse :</label>
    <input
      class="border-2 flex-1 border-neutral-800 px-2 "
      type="text"
      id="location"
      name="location"
      required
    />
  </div>

  <div class="flex gap-3">
    <div class="flex flex-col gap-1  w-1/2">
      <label for="phone">Numéro de téléphone :</label>
      <input
        class="border-2  border-neutral-800 px-2 "
        type="text"
        id="phone"
        name="phone"
        pattern="[0-9]{8}"
        required
      />
    </div>
    <div class="flex flex-col gap-1  w-1/2">
      <label for="email">E-mail :</label>
      <input
        class="border-2  border-neutral-800 px-2 "
        type="email"
        id="email"
        name="email"
        placeholder="flen@gmail.com"
        required
      />
    </div>
  </div>
  <div class="flex gap-3">
    <div class="flex flex-col gap-1  w-1/2">
      <label for="mot">Mot de passe :</label>
      <input
        class="border-2  border-neutral-800 px-2 "
        type="password"
        id="mot"
        name="mot"
        required
      />
    </div>
    <div class="flex flex-col gap-1  w-1/2">
      <label for="confirmer">Confirmer le mot de passe :</label>
      <input
        class="border-2  border-neutral-800 px-2 "
        type="password"
        id="confirmer"
        name="confirmer"
        required
      />
    </div>
  </div>
  <input
    class="border-2  border-neutral-800 px-5 self-center bg-white "
    type="submit"
    value="S'inscrire"
  />
</form>
