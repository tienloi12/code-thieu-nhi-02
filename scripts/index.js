let addN = document.getElementById("add-N");
let inputN = document.getElementById("input-N");
let resultX = document.getElementById("result");
function showresultX()
{
   let resultItem = f(inputN.value)
   resultX.innerHTML=resultItem;
}
function f(N)
{
   if ( N==1) {
       return 1;
   }
   if (N==2)
   {
    return 3;
   }
   return f(N-1)+ (2*f(N-2) )
}
addN.addEventListener("click",showresultX)