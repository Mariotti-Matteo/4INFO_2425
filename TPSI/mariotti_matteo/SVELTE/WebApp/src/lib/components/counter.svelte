<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wgt,FILL,GRAND@48,400,0,0" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" rel ="stylesheet">
</svelte:head>

<script>
    export let counter = 0;

    function counter_incr() {
        counter += 1;
    }

    function counter_decr() {
        counter -= 1;
    }
</script>

<div class="container">
    <div class="pulsante">
        <button on:click={counter_decr}>
            <span class="material-symbol-outlined icon">-</span>
        </button>
    </div>
    <div class="number">
        {counter}
    </div>
    <div class="pulsante">
        <button on:click={counter_incr}>
            <span class="material-symbols-outline icon">+</span>
        </button>
    </div>
</div>



<style>
.container {
    border: 4px solid #D43C2F;
    display: flex;
    justify-content: space-between;
    border-radius: 30px;
    width: 300px;
    padding: 10px;
}

.pulsante {
    display: flex;
    align-items: center;
}

button {
    border: none;
    background: none;
}

.icon {
    font-size: 2.5rem;
    color: #F09C00;
    font-weight: bolder;
}

.icon:hover {
    color: #D43C2F;
    cursor: pointer;
}

.icon:active {
    text-shadow: 1 1 10px #D43C2F;
}

.number {
    font-size: 4rem;
    font-family: 'Bungee Spice', cursive;
}
</style>