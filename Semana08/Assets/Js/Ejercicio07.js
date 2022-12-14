const array1 = [20,35,18,7,9,60]
let count_media = 0

const calcular_media = (media)=>{
    media.forEach(element => {
        count_media += element
    });
    count_media = count_media/media.length
    return count_media
}


console.log(calcular_media(array1))