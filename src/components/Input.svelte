<script lang="ts">
  export let isLarge = false;
  export let label: string;
  export let maxlength: number | null = null;
  export let name: string;
  export let pattern: string | null = null;
  export let required = true;
  export let type = "text";
</script>

<div class="flex gap-1 flex-col" class:col-span-2={isLarge}>
  <label for={name} class="font-bold">{label}</label>
  <input
    {maxlength}
    {name}
    {pattern}
    {required}
    {type}
    class="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    id={name}
    placeholder={label}
  />
</div>
