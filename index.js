const input_text = document.querySelector("#input-text");
const output_text = document.querySelector("#output-text");

const paragraph_one = document.querySelector("#paragraph-1");
const paragraph_two =  document.querySelector("#paragraph-2");

const btn_copy = document.querySelector("#btn-copy");


const matriz_code =[
    ["e", "enter"], //index 0
    ["i", "imes"], //index 1
    ["a", "ai"], //index 2
    ["o", "ober"], //index 3
    ["u", "ufat"], //index 4
];

function btnEncrypt(){
    const pattern = /^[a-z_ ]+$/;

    if(input_text.value == "")
    {
        alert("Ingrese el texto a cifrar.");
    }
    else if(input_text.value.match(pattern))
    {
        const encrypted_text = encrypt(input_text.value);
        output_text.value = encrypted_text;
        //console.log(encrypted_text);
        showControls(false);
    }
    else
    {
        alert("Introduzca solo letras minúsculas y sin acentos.")
    }
}

function btnDecrypt()
{
    const decrypted_text = decrypt(input_text.value);
    output_text.value = decrypted_text;
    //console.log(decrypted_text);
    showControls(false);
}

function btnCopy(){
    copy();
}

function encrypt(input_text)
{
    for(let i = 0 ; i < matriz_code.length; i++)
    {
        if(input_text.includes(matriz_code[i][0]))
        {
            input_text = input_text.replaceAll(
            matriz_code[i][0],
            matriz_code[i][1])
        }
    }
    return input_text;
}

function decrypt(output_text)
{
    const copy = output_text;
    for(let i = matriz_code.length-1 ; i >= 0; i--)
    {
        if(output_text.includes(matriz_code[i][1]))
        {
            output_text = output_text.replaceAll(
            matriz_code[i][1],
            matriz_code[i][0]);
        }
    }
    return output_text;
}

function copy(){
    output_text.select();
    output_text.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(output_text.value);
    output_text.value = "";
    showControls(true);
    alert("Texto copiado");
    input_text.focus();
}

function showControls(flag){
    if(flag){
        paragraph_one.style.visibility = "visible";
        paragraph_two.style.visibility = "visible";
        btn_copy.style.visibility = "hidden";
        output_text.style.backgroundImage = "url(imagenes/Muñeco.png)";
    }
    else{
        paragraph_one.style.visibility = "hidden";
        paragraph_two.style.visibility = "hidden";
        btn_copy.style.visibility = "visible";
        output_text.style.backgroundImage = "none";
    }

}