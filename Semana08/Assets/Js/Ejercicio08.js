let frutas = ['manzana','banana','fresa']

//Agregamos 3 frutas mas al array
frutas.push('sandia')
frutas.push('pera')
frutas.push('naranja')

//Eliminamos la fruta banana
const frutas_filtradas = frutas.filter((item)=> item!=='banana')

console.log(frutas_filtradas)