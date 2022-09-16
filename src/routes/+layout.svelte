<script>
  import "../app.css";
</script>

<header>
  <nav class="flex justify-around py-2 bg-red-900">
    <a
      href="/"
      class="border-2 border-yellow-500 rounded-full px-16 py-2 font-bold text-yellow-500 hover:bg-yellow-300 hover:text-white"
      >Acceuil</a
    >
    <a
      class="border-2 border-yellow-500 rounded-full px-16 py-2 font-bold text-yellow-500 hover:bg-yellow-300 hover:text-white"
      href="/register">Inscription</a
    >
    <a
      class="border-2 border-yellow-500 rounded-full px-16 py-2 font-bold text-yellow-500 hover:bg-yellow-300 hover:text-white"
      href="/login">Connexion</a
    >
  </nav>
</header>
<main  class="flex-1 ">
  <slot />
</main>
