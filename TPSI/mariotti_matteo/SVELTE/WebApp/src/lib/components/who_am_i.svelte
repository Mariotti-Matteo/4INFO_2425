<script>
    export let nome = "Matteo"; 
    export let cognome = "Mariotti";
    export let eta = 17;
    export let citta = "Torino";
    export let scuola = "Istituto Salesiano Agnelli";
    export let sezione = "Informatica";
    export let classe = 4;
    export let dataNascita = "25/05/2000";
    export let residenza = "Torino";
    let url = 'https://lumiere-a.akamaihd.net/v1/images/wolffe-main_5b463575.jpeg?region=82%2C1%2C960%2C540'
    export let larghezza_img = 350;
</script>


<h1>Io sono {nome} {cognome} e ho {eta} anni</h1>
<p>Sono nato a {citta} il {dataNascita} e frequento {scuola}, presso la Sezione di {sezione}, sono attualmente in {classe} e abito a {residenza}</p>


<img src={url} alt="Me stesso" width={larghezza_img} />