<script lang="ts">
  import Input from "$components/Input.svelte";
  import Form from "$src/components/Form.svelte";
</script>

<Form submitButton="Se connecter">
  <Input label="E-mail" type="email" name="email" />
  <Input label="Mot de passe" type="password" name="password" />
</Form>
