let inputBig=document.getElementById('inputArea');
let inputSmall=document.getElementById('operatorInput');
let operator='';
let opera="";
let canClear=false
let a;
let b;



// clearDefault
function clearDefault(){
   inputBig.value='0';

   // clearDefault2
   inputSmall.value='';

   // clearAll
   a='';
   b='';
}

// clearBig
function clearBig(){
   inputBig.value='0';
}

// to cut on backspace
function cutDefault(){
   let cut =inputBig.value;
   // inputBig.value=cut.slice(0, -1);
   inputBig.value=cut.substring(0, cut.length-1);
}

// to make figures show on big screen
function displayText(figures){
   if (canClear){
      canClear=false;
      inputBig.value='';
   }

   if (inputBig.value == '0'){
         inputBig.value = '';
      } 

   inputBig.value+=figures;
   b= inputBig.value;
   }



// to display on small screen

function calcu(small){
   inputSmall.value+=inputBig.value + small;

   if (operator){
      operate();
   }
   operator=small;

   canClear=true;

   a=inputBig.value;

}




function operate(){
let answer;
   if  (operator == '+'){
      answer= Number (a) + Number (b);
   }

    else if (operator == '-'){
      answer= Number (a) - Number (b);
   }
   else if (operator == 'x'){
      answer= Number (a) * Number (b);
   }
   else if (operator == '/'){
      answer= Number (a) / Number (b);
   }


   // inputBig.value=answer;

   // inputSmall.value=inputBig.value+'=';
   // inputSmall.value += b + '=';
}
function percentage(){
   inputBig.value=b/100;
   // inputSmall.value += b + '%'+ '=';
   
}
function anyValue(){
   inputBig.value= 1 / b;
}

function Root(){
   inputBig.value=a * b;

}

function squreRoot(){
   let squreRoot= Math.sqrt(b);
   inputBig.value=squreRoot;
}
function plusOrMinus(){
   inputBig.value = -1 * b;
}