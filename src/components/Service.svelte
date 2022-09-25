<script lang="ts">
  import type { Service } from "$models/Service";
  export let service: Service;
</script>

<tr>
  <td class="odd:bg-white even:bg-violet-50 px-5 py-3 border border-gray-200"
    >{service.type}
  </td>
  <td class="odd:bg-white even:bg-violet-50 px-5 py-3 border border-gray-200"
    >{service.cost}</td
  >
  <td class="odd:bg-white even:bg-violet-50 px-5 py-3 border border-gray-200"
    >{service.date}</td
  >
  <td class="odd:bg-white even:bg-violet-50 px-5 py-3 border border-gray-200"
    >{service.address}</td
  >

  <td class="odd:bg-white even:bg-violet-50 px-5 py-3 border border-gray-200">
    <form method="POST">
      <input type="number" name="id" required hidden value={service.id} />
      <input
        type="submit"
        value="Annuler"
        class="
      border border-red-600
      py-2
      px-6
      text-red-600
      inline-block
      rounded
      hover:bg-red-600 hover:text-white
      "
      />
    </form></td
  >
</tr>
