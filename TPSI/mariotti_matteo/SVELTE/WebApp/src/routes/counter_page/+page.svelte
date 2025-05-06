<script>
    let contatore = 0;
    let contatore_2 = 0;
  import Counter from "$lib/components/counter.svelte";
  import DoubleCounter from "$lib/components/double_counter.svelte";
    let numeri = [1, 7, 3, 4, 5, 6, 8, 9, 10];
</script>

<h1>
    Pagina Counter
</h1>

{#if contatore < 5}
    <h2 class="rosso">Il valore del contatore vale: {contatore}</h2>
{:else}
    <h2 class="verde">Il valore del contatore vale: {contatore}</h2>
{/if}

<!-- 
<h2>Il valore del contatore vale: {contatore}</h2> -->

<Counter bind:counter={contatore} />
<!--  -->
<!-- <h2>Il valore del contatore 2 vale: {contatore_2}</h2> -->
<!--  -->
<!-- <DoubleCounter bind:counter={contatore_2} /> -->


<ul>
  {#each numeri as numero, indice}
    <li>numeri[{indice}]:{numero}</li>
  {/each}
</ul>


<style>
    .rosso {
        color: red;
    }

    .verde {
        color: green;
    }
</style>