<script lang="ts">
  let budget = 50;
</script>

<form
  class="flex flex-col text-xl w-max mx-auto gap-4 mt-48 bg-black bg-opacity-50 p-4 rounded-lg  "
  action="#"
>
  <div class="flex gap-4 w-full justify-between">
    <label class=" text-white" for="">Service désiré :</label>
    <select name="service" id="service">
      <option value="" disabled selected hidden />
      <option value="baby-sitting">Baby-sitting</option>
      <option value="electricity">Electricité</option>
      <option value="gardening">Jardinage</option>
      <option value="housework">Ménage</option>
      <option value="plumbing">Plomberie</option>
      <option value="private_lessons">Cours particulier</option>
    </select>
  </div>
  <div class="flex gap-4 w-full justify-between">
    <label class=" text-white" for="budget">Budget :</label>
    <input type="range" min="20" max="150" bind:value={budget} />
    <div>
      <input
        class="text-right w-16 "
        id="budget"
        type="number"
        bind:value={budget}
      />
      <span class="text-white">DT</span>
    </div>
  </div>
  <div class="flex gap-4 w-full justify-between">
    <label class=" text-white" for="date">Date :</label>
    <input id="date" type="date" name="date" />
  </div>

  <div class="flex gap-4 w-full justify-between">
    <label class=" text-white" for="location">Adresse :</label>
    <input class="border" type="text" id="location" name="location" required />
  </div>
  <input class="self-center" type="submit" value="Publier" />
</form>
