<script lang="ts">
  export let firstName: string;
  export let lastName: string;
  export let service: string;
  export let date: string;
  export let profilePicture: string;
  export let price: number;
  export let phoneNumber: string;
</script>

<article>
  <span
    >{firstName}
    {lastName} peut être votre {service}
    {date} pour {price} dinars</span
  >
  <img src={profilePicture} alt={firstName + " " + lastName} />
  <span>contacter {phoneNumber}</span>
</article>
