//functions 

const fivePorcentaje = (num) => {
    let x = document.getElementById('billinput').value;
    let result =  (x * 5) / 100 ;

    return document.querySelector('.resultvaliue').innerHTML = result;
}


const tenPorcentaje = (num) => {
    let x = document.getElementById('billinput').value;
    let result =  (x * 10) / 100;

    return document.querySelector('.resultvaliue').innerHTML = result;
}

const fifTeenPorcentaje = (num) => {
    let x = document.getElementById('billinput').value;
    let result =  (x * 15) / 100;

    return document.querySelector('.resultvaliue').innerHTML = result;
}


const twentyFivePorcentaje = (num) => {
    let x = document.getElementById('billinput').value;
    let result =  (x * 25) / 100;

    return document.querySelector('.resultvaliue').innerHTML = result;
}


const fiftyPorcentaje = (num) => {
    let x = document.getElementById('billinput').value;
    let result =  (x * 50) / 100;

    return document.querySelector('.resultvaliue').innerHTML = result;
}



const resetOperator = () => {
    document.querySelector('.resultvaliue').innerHTML = "";
}
