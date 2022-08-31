<script lang="ts">
  let budget = 50;
</script>

<form
  class="flex flex-col w-max mx-auto border-2 mt-52 gap-2 px-2 py-1 opacity-60 bg"
  action="#"
>
  <div>
    <label for="">Sélectionner le service désiré : </label>
    <select name="service" id="service">
      <option value="" disabled selected hidden />
      <option value="plumbing">Plomberie</option>
      <option value="gardening">Jardinage</option>
      <option value="electricity">Electricité</option>
      <option value="baby-sitting">Baby-sitting</option>
      <option value="housework">Ménage</option>

      <option value="private lesson">Cours particulier</option>
    </select>
  </div>
  <div>
    <label for="budget">Indiquer votre budget : </label>
    <input type="range" min="20" max="150" bind:value={budget} />
    <input
      class="text-right w-16 "
      id="budget"
      type="number"
      bind:value={budget}
    />
    <span>DT</span>
  </div>
  <div>
    <label for="date">Indiquer la date : </label>
    <input id="date" type="date" name="date" />
  </div>

  <div>
    <label for="location">Adresse</label>
    <input class="border" type="text" id="location" name="location" required />
  </div>
  <input class="self-center" type="submit" value="Publier" />
</form>
