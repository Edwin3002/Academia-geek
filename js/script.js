let nPlanetas = Array('Tierra', 'Marte', 'luna');
let distancia = [ 6,5, '69'];
const tamaño = [];
console.log(nPlanetas)
console.log(distancia)
console.log(tamaño)

let i = 0;
while(i <= nPlanetas.length -1){
    console.log(i)
    console.log(nPlanetas[i])
    i = i + 1
}

for (const k in distancia){
    if(distancia[k] == '5'){
        console.log('Si se encontro la distancia')
    }else{
        console.log('No se encontro la distancia')

    }
}