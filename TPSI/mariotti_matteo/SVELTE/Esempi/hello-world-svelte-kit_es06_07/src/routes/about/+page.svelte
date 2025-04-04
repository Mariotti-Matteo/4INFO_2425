<script>
	import Banner from "./Banner.svelte";
	let name ="Jhon Doe";
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Informazioni su questa app</h1>

	<p>
		Questa è un'app <a href="https://svelte.dev/docs/kit">SvelteKit</a>. Puoi crearne una tua digitando
		il seguente comando nella tua riga di comando e seguendo le istruzioni:
	</p>

	<pre>npx sv create</pre>

	<p>
		La pagina che stai guardando è puro HTML statico, senza bisogno di interattività lato client.
		Per questo motivo, non è necessario caricare alcun JavaScript. Prova a visualizzare il sorgente
		della pagina o ad aprire il pannello di rete degli strumenti per sviluppatori e ricaricare.</p>

	<p>
		La pagina <a href="/sverdle">Sverdle</a> illustra il caricamento dei dati e la gestione dei moduli in SvelteKit. Prova
		ad usarla con JavaScript disabilitato!
	</p>

	<Banner />

	
</div>
