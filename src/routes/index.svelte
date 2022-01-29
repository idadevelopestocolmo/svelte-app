<script>
    import { show } from "../stores/store";
    import ShowCard from "../components/showCard.svelte";

    let searchShow = "";
    let filteredShow = [];

    $: {
        if(searchShow) {
            filteredShow = $show.filter(singleShow => singleShow.name.toLowerCase().includes(searchShow.toLowerCase()))
        }else {
            filteredShow = [...$show]
        }
    }
</script>

<svelte:head>
    <title>TVmaze</title> 
</svelte:head>

<body class="bg-gray-800"></body>
<!-- <img class="my-8 mb-10 mx-auto" src="src\assets\tvm-header-logo.png" alt="Tv Maze logo"> -->
<input class="w-full rounded-md mt-12 text-lg p-4 border-2 border-orange-500 mb-6 bg-gray-700 text-teal-500 placeholder:text-teal-500" type="text" bind:value={searchShow} placeholder="Search show..." spellcheck="false">
<div class="pyu-4 grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    {#each filteredShow as singleShow}
        <ShowCard singleShow={singleShow}/>
    {/each}
</div>