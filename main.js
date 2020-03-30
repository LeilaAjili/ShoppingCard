const plus = Array.from(document.querySelectorAll('.plus'))
const minus = Array.from(document.querySelectorAll('.minus'))
const count = Array.from(document.getElementsByClassName('count'))
const prix = Array.from(document.querySelectorAll('.prix'))
console.log(    count)


for(let el of plus){
  el.addEventListener("click", ()=>{
el.previousElementSibling.innerHTML=Number(el.previousElementSibling.innerHTML )+ 1
total()
 

  })
}

for (let el of minus)
{
        el.addEventListener("click", ()=>{
            if( Number(el.nextElementSibling.innerHTML)>=1){
            el.nextElementSibling.innerHTML=Number(el.nextElementSibling.innerHTML)-1

            total()
    }
 })
}   

const total = ()=>{
    let sum = 0;
    for(let i =0; i<prix.length;i++){
        sum += count[i].innerHTML*prix[i].innerHTML
        console.log(sum)
        document.querySelector(".total-pa").innerHTML='TOTAL PANIER = '+sum+ ' DT';

    }
    return sum
}








/*plus.map(el=>el>5?1:0)




function test(){
    
}


const test = ()=>{





    
}*/

