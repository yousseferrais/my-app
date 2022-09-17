<script lang="ts">
  export let submitButton: string;
</script>

<form
  class="px-8 pt-6 pb-8 grid grid-cols-2 w-full text-xl max-w-2xl bg-white text-gray-700 rounded-lg gap-4"
  method="POST"
>
  <slot />
  <input
    class="col-span-2 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
    type="submit"
    value={submitButton}
  />
</form>
