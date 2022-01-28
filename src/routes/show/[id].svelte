<script context="module">
    export async function load({params}) {
        const id = params.id;
        const url = `https://api.tvmaze.com/shows/${id}`;
        const res = await fetch(url);
        const singleShow = await res.json();
        return {props: {singleShow}}
    }
</script>
<script>
    export let singleShow;

    const originalString = singleShow.summary;
    
    const strippedString = originalString.replace(/(<([^>]+)>)/gi, "");
</script>
<img class="my-8 mb-14 mx-auto" src={singleShow.image.original} alt="">
<div class="text-zinc-200 text-xl m-10">
    <p class="mb-5"><strong class="text-orange-500">Name: </strong>{singleShow.name}</p>
    <p class="mb-5"><strong class="text-orange-500">Language: </strong>{singleShow.language}</p>
    <p class="mb-5"><strong class="text-orange-500">Genre: </strong>{singleShow.genres.join(", ")}</p>
    <p class="mb-5"><strong class="text-orange-500">Rating: </strong>{singleShow.rating.average}/10</p>
    <p><strong class="text-orange-500">Description: </strong>{strippedString}</p>
</div>