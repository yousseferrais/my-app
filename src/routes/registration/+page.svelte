<form class="flex flex-col  " action="#">
  <div>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" required />
  </div>

  <div>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" required />
  </div>
  <div>
    <label for="email">E-mail</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="flen@gmail.com"
      required
    />
  </div>
  <div>
    <label for="mot">Mot de passe</label>
    <input type="password" id="mot" name="mot" required />
  </div>
  <div>
    <label for="confirmer">Confirmer le mot de passe</label>
    <input type="password" id="confirmer" name="confirmer" required />
  </div>
  <div>
    <label for="phone">Numéro de téléphone</label>
    <input type="text" id="phone" name="phone" pattern="[0-9]{8}" required />
  </div>
  <div>
    <label for="location">Adresse</label>
    <input type="text" id="location" name="location" required />
  </div>

  <input type="submit" value="Submit" />
</form>
