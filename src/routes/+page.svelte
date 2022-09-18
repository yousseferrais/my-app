<script lang="ts">
  import Input from "$components/Input.svelte";
  import Form from "$components/Form.svelte";
</script>

<Form submitButton="Se connecter">
  <Input label="E-mail" type="email" name="email" maxlength={64} />
  <Input label="Mot de passe" type="password" name="password" maxlength={32} />
</Form>
<span
  >Vous n’avez pas de compte ? <a
    href="/register"
    class="text-blue-500 underline">Inscrivez-vous</a
  >
</span>
