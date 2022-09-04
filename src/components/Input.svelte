<script lang="ts">
  export let flexcol = false;
  export let label: string;
  export let name: string;
  export let placeHolder = "";
  export let type: string;
</script>

<div class="flex gap-1 {flexcol ? 'flex-col' : 'mt-2'}">
  <label for={name} class="text-white">{label}</label>
  <input
    {type}
    id={name}
    {name}
    required
    placeholder={placeHolder}
    class="flex-1"
    class:w-0={!flexcol}
  />
</div>
