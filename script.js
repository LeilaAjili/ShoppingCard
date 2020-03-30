

////////////////////////Incrémentation quantité 1
function pluisiwatch1()
{
    let prixtwo =document.querySelector(".prix-two").innerHTML;
    
    let qtwo =document.querySelector(".q-watch2").innerHTML;
    let total=document.querySelector(".total-pa").innerHTML;
    let qone =document.querySelector(".q-watch1").innerHTML;
    let prixone =document.querySelector(".prix-one").innerHTML;
    let qthree =document.querySelector(".q-watch3").innerHTML;
    let prixthree =document.querySelector(".prix-three").innerHTML;

    qone++
    
    document.querySelector(".q-watch1").innerHTML=qone
   
    total=(prixtwo*qtwo+qone*prixone+qthree*prixthree);
  
    document.querySelector(".total-pa").innerHTML='TOTAL PANIER = '+total+ ' DT';

    
  
  
}
////////////////////////Décrémentation quantité 1
function moinsiwatch1()
{
  
    let prixone =document.querySelector(".prix-one").innerHTML;
    
    let qone =document.querySelector(".q-watch1").innerHTML;
    let prixtwo =document.querySelector(".prix-two").innerHTML;
    let qtwo =document.querySelector(".q-watch2").innerHTML; 
    let total=document.querySelector(".total-pa").innerHTML;
    qone--
    if(qone== -1)
    {
        qone= 0;
    }
    document.querySelector(".q-watch1").innerHTML=qone
   
    total=prixone*qone+prixtwo*qtwo
  
    document.querySelector(".total-pa").innerHTML='TOTAL PANIER = '+total+ ' DT';
  
}

////////////////////////Incrémentation quantité 2

function pluisiwatch2()
{
  
    let prixtwo =document.querySelector(".prix-two").innerHTML;
    let qtwo =document.querySelector(".q-watch2").innerHTML;
    let total=document.querySelector(".total-pa").innerHTML;
    let qone =document.querySelector(".q-watch1").innerHTML;
    let prixone =document.querySelector(".prix-one").innerHTML;
    let qthree =document.querySelector(".q-watch3").innerHTML;
    let prixthree =document.querySelector(".prix-three").innerHTML;

    qtwo++
    
    document.querySelector(".q-watch2").innerHTML=qtwo
   
    total=(prixtwo*qtwo+qone*prixone+qthree*prixthree);
  
    document.querySelector(".total-pa").innerHTML='TOTAL PANIER = '+total+ ' DT';
  
}

////////////////////////Décrementation quantité 2
function moinsiwatch2()
{
  
    let prixtwo =document.querySelector(".prix-two").innerHTML;
    
    let qtwo =document.querySelector(".q-watch2").innerHTML;
    let total=document.querySelector(".total-pa").innerHTML;
    let qone =document.querySelector(".q-watch1").innerHTML;
    let prixone =document.querySelector(".prix-one").innerHTML;
    let qthree =document.querySelector(".q-watch3").innerHTML;
    let prixthree =document.querySelector(".prix-three").innerHTML;
    qtwo--;
    if(qtwo== -1)
    {
        qtwo= 0;
    }
    document.querySelector(".q-watch2").innerHTML=qtwo;
   
    total=(prixtwo*qtwo+qone*prixone+qthree*prixthree);
  
    document.querySelector(".total-pa").innerHTML='TOTAL PANIER = '+total+ ' DT';
  
}

////////////////////////Incrémentation quantité 3

function pluisiwatch3()
{
  
    let prixtwo =document.querySelector(".prix-two").innerHTML;
    
    let qtwo =document.querySelector(".q-watch2").innerHTML;
    let total=document.querySelector(".total-pa").innerHTML;
    let qone =document.querySelector(".q-watch1").innerHTML;
    let prixone =document.querySelector(".prix-one").innerHTML;
    let qthree =document.querySelector(".q-watch3").innerHTML;
    let prixthree =document.querySelector(".prix-three").innerHTML;
    

    qthree++
    
    
    document.querySelector(".q-watch3").innerHTML=qthree;
   
    total=(prixtwo*qtwo+qone*prixone+qthree*prixthree);
  
    document.querySelector(".total-pa").innerHTML='TOTAL PANIER = '+total+ ' DT';
  
}

////////////////////////Décrementation quantité 3

function moinsiwatch3()
{
  
    let prixtwo =document.querySelector(".prix-two").innerHTML;
    
    let qtwo =document.querySelector(".q-watch2").innerHTML;
    let total=document.querySelector(".total-pa").innerHTML;
    let qone =document.querySelector(".q-watch1").innerHTML;
    let prixone =document.querySelector(".prix-one").innerHTML;
    let qthree =document.querySelector(".q-watch3").innerHTML;
    let prixthree =document.querySelector(".prix-three").innerHTML;
    qthree--
    if(qthree== -1)
    {
        qthree= 0;
    }
    document.querySelector(".q-watch3").innerHTML=qthree;
   
    total=(prixtwo*qtwo+qone*prixone+qthree*prixthree);
  
    document.querySelector(".total-pa").innerHTML='TOTAL PANIER = '+total+ ' DT';
  
}