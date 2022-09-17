<script lang="ts">
  export let firstname: string;
  export let lastname: string;
  export let service: string;
  export let date: string;
  export let profilePicture: string;
  export let price: number;
  export let phoneNumber: string;
</script>

<article>
  <span
    >{firstname}
    {lastname} peut être votre {service}
    {date} pour {price} dinars</span
  >
  <img src={profilePicture} alt={firstname + " " + lastname} />
  <span>contacter {phoneNumber}</span>
</article>
