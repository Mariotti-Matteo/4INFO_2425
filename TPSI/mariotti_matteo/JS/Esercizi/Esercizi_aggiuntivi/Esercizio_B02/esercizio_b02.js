function manipolazione(stringa) {
    stringa = stringa.toLowerCase();
    stringa = stringa.charAt(0).toUpperCase() + stringa.slice(1);
    // stringa.charAt(0) = stringa.charAt(0).toUpperCase();
    console.log(stringa);

}

manipolazione("CIAO")