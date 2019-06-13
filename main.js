
const encrypt = () => {
    //////////////////////////////
    // Get inputs
    let input = document.getElementById('message').value;
    let inputKey = document.getElementById('encrypt-key').value;

    ////////////////////////////
    // Empty Arrays
    let arrKey = [];
    let arr = [];
    let arrEncript = [];
    let key = 0;

    /////////////////// KEY
    // From key input to array
    for (let i = 0; i < inputKey.length; i++) {
        arrKey[i] = inputKey[i];
    }

    // Key making
    for (let i = 0; i < arrKey.length; i++) {
        key += parseInt(arrKey[i].charCodeAt());
    }


    //////////////////// Message
    // From input to "arr" Array
    for (let i = 0; i < input.length; i++) {
        arr[i] = input[i];
    }

    //  Adding key to input
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charCodeAt();
        arr[i] += key;
        arrEncript[i] = String.fromCharCode(arr[i]);
    }

    ///////////// Display
    document.getElementById('encrypted-message').innerHTML = arrEncript.join("");
    document.getElementById('encrypted-message').style.padding = '1rem';
    document.getElementById('encrypted-message').style.border = '1px solid red'; 


}


const decrypt = () => {
    //////////////////////////////
    // Get inputs
    let input = document.getElementById('decrypt-message').value;
    let inputKey = document.getElementById('decrypt-key').value;

    ////////////////////////////
    // Empty Arrays
    let arrKey = [];
    let arr = [];
    let arrDecrypt = [];
    let key = 0;

    /////////////////// KEY
    // From key input to array
    for (let i = 0; i < inputKey.length; i++) {
        arrKey[i] = inputKey[i];
    }

    // Key making
    for (let i = 0; i < arrKey.length; i++) {
        key += parseInt(arrKey[i].charCodeAt());
    }


    //////////////////// Message
    // From input to "arr" Array
    for (let i = 0; i < input.length; i++) {
        arr[i] = input[i];
    }

    //  Adding key to input
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charCodeAt();
        arr[i] -= key;
        arrDecrypt[i] = String.fromCharCode(arr[i]);
    }

    ///////////// Display
    document.getElementById('decrypted-message').innerHTML = arrDecrypt.join("");
    document.getElementById('decrypted-message').style.padding = '1rem';
    document.getElementById('decrypted-message').style.border = '1px solid red'; 


}
