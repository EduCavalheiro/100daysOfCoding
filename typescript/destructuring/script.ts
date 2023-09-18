const {body} = document;

function handleClick({
    currentTarget,
    pageX
} : {
    currentTarget: EventTarget | null;
    pageX: number;
}) {
    console.log(currentTarget, pageX);
}

document.documentElement.addEventListener("click", handleClick);


function comparar(tipo: "menor" | "maior", ...numeros: Array<number>) {
    if(tipo === 'menor'){
        return Math.min(...numeros);
    }

    if(tipo === 'maior') {
        return Math.max(...numeros);
    }
}

console.log(comparar('maior', 3, 43, 2, 456, 7, 4, 1, 7));