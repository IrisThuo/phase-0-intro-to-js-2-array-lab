// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const moreCats = [...cats, name];
    return moreCats;
}

function prependCat(name){
    const coolCats = [name, ...cats];
    return coolCats;
}

function removeLastCat(){
    const newCats =cats.slice(0, cats.length-1);
    return newCats;
}

function removeFirstCat(){
    const lessCats =cats.slice(1);
    return lessCats;
}

