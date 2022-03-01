let nPlanetas = Array('Tierra', 'Marte', 'luna');
let distancia = [ 6,5, 7];
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

// for (const k in distancia){
//     if(distancia[k] == '5'){
//         console.log('Si se encontro la distancia')
//     }else{
//         console.log('No se encontro la distancia')

//     }
// }
nPlanetas.forEach((p, i) =>{
    console.log("planeta", p, i)
    document.getElementById(`nPlaneta_${i}`).value = i;
    document.getElementById(`planeta_${i}`).value = p;
    // document.getElementById(`dPlaneta_${i}`).value = i;
    console.log(i)
})
distancia.forEach((d, i) =>{
    console.log("distancia", d)
    document.getElementById(`dPlaneta_${i}`).value = d;
    document.getElementById(`tPlaneta_${i}`).value = d*5;
    console.log(i)
})
// let as = document.getElementById
// console.log(nPlaneta_1)