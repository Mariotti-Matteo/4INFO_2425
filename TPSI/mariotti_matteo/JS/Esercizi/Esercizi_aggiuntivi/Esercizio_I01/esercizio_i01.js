function name(params) {
    try {
    if (isNaN(params)) {
        throw new Error("Non é un numero");
    }
    console.log("É un numero");
    params = params / 2;
    console.log(params);
    } catch (error) {
        console.error("Errore: " + error.message);
    }    
}

name("5");
name(5);
name("ciao");