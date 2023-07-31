const ejemploPromesa = () => Promise.resolve("A");

    function primerFuncion(){
        ejemploPromesa().then(resultado=>console.log(resultado));
        console.log("B");
    }

    async function segundaFuncion(){
        
    }