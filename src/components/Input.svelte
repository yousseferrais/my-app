<script lang="ts">
  export let flexcol = false;
  export let label: string;
  export let name: string;
  export let type: string;
</script>

<div class="flex gap-1 {flexcol ? 'flex-col' : 'mt-2'}">
  <label for={name} class="block mb-2 font-bold text-gray-700">{label}</label>
  <input
    {type}
    id={name}
    {name}
    required
    placeholder={label}
    class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
  />
</div>
