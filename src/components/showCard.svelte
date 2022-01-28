<script>
    import { fade } from "svelte/transition";
    export let singleShow;
</script>
<a class="p-6 bg-gray-700 text-gray-800 text-center hover:bg-zinc-500 rounded-md
    shadow-sm hover:shadow-sm flex flex-col items-center" href={`/show/${singleShow.id}`} transition:fade>
    <img src="{singleShow.image}" alt="{singleShow.name}">
    <h2 class="mt-3 uppercase text-xl text-orange-500"><strong>{singleShow.name}</strong></h2>
</a>