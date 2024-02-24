function sumar(){

    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero5 = parseInt(document.getElementById("numero5").value);
    let numero10 = parseInt(document.getElementById("numero10").value);
    let numero25 = parseInt(document.getElementById("numero25").value);
    let numero50 = parseInt(document.getElementById("numero50").value);
    let numero100 = parseInt(document.getElementById("numero100").value);
    let numero200 = parseInt(document.getElementById("numero200").value);
    let numero500 = parseInt(document.getElementById("numero500").value);
    let numero1000 = parseInt(document.getElementById("numero1000").value);
    let numero2000 = parseInt(document.getElementById("numero2000").value);

    if (document.getElementById("numero1").value === ""  ){
        document.getElementById("numero1").value=0;
    }
    numero1 *= 1;

    if (document.getElementById("numero5").value === ""  ){
        document.getElementById("numero5").value=0;
    }
    numero5 *= 5;

    if (document.getElementById("numero10").value === ""  ){
        document.getElementById("numero10").value=0;
    }
    numero10 *= 10;

    if (document.getElementById("numero25").value === ""  ){
        document.getElementById("numero25").value=0;
    }
    numero25 *= 25;

    if (document.getElementById("numero50").value === ""  ){
        document.getElementById("numero50").value=0;
    }
    numero50 *= 50;

    if (document.getElementById("numero100").value === ""  ){
        document.getElementById("numero100").value=0;
    }
    numero100 *= 100;

    if (document.getElementById("numero200").value === ""  ){
        document.getElementById("numero200").value=0;
    }
    numero200 *= 200;

    if (document.getElementById("numero500").value === ""  ){
        document.getElementById("numero500").value=0;
    }
    numero500 *= 500;

    if (document.getElementById("numero1000").value === ""  ){
        document.getElementById("numero1000").value=0;  
    }
    numero1000 *= 1000;
    
    if (document.getElementById("numero2000").value === ""  ){
        document.getElementById("numero2000").value=0;
    }
    numero2000 *= 2000 ;

    


    
    
   


    let suma=numero1 + numero5 + numero10 + numero25  + numero50 + numero100 + numero200 + numero500 + numero1000 + numero2000;

document.getElementById("resultado").innerHTML= " "+ suma;

 

}

function limpiar(){

    document.getElementById("resultado").innerHTML= "0";
    document.getElementById("numero1").value= "0";
    document.getElementById("numero5").value= "0";
    document.getElementById("numero10").value= "0";
    document.getElementById("numero25").value= "0";
    document.getElementById("numero50").value= "0";
    document.getElementById("numero100").value= "0";
    document.getElementById("numero200").value= "0";
    document.getElementById("numero500").value= "0";
    document.getElementById("numero1000").value= "0";
    document.getElementById("numero2000").value= "0";
    
}


