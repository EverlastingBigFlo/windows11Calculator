let inputBig=document.getElementById('inputArea');
let inputSmall =document.getElementById('operatorInput');

let calcu = document.getElementById('calcu');
let operator='';
let opera="";
let canClear=false;
let a;
let b;



// clearDefault
function clearDefault(){
   inputBig.value='0';

   // clearDefault2
   inputSmall.value='';

   // clearAll
   calcu = '';
   a='';
   b='';
   opera = '';
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

// to make figures show on big input box screen
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



// to display operation on small input box

function multiplicate(small){
   inputSmall.value+=inputBig.value + small;

   if (operator){
      operate();
   }
   operator=small;

   canClear=true;

   a=inputBig.value;

}


// to perform the calculation operations

function operate(){
   let answer; 
 

   if  (operator == '+'){
      answer = Number (a) + Number (inputBig.value);
   }

    else if (operator == '-'){
      answer = Number (a) - Number (inputBig.value);
   }
   else if (operator == 'x'){
      answer = Number (a) * Number (inputBig.value);
   }
   else if (operator == '/'){
      answer = Number (a) / Number (inputBig.value);
   }


   inputBig.value=answer;
   // operator = '';
   // inputSmall.value =inputBig.value + '';
   // inputBig.value =inputBig.value + '';
   // inputSmall.value = b + '=';
}


// to carry out the squreroot operation

function squre(){
   let squreRoot= Math.sqrt(b);
   inputBig.value=squreRoot;
}

// to carry out the root operation


function Root(){
   inputBig.value=a * b;

}

// to carry out the percentage operation

function percentage(){
   inputBig.value=b/100;
   // inputSmall.value += b + '%'+ '=';
   
}

// to carry out the anyvalue operation

function anyValue(){
   inputBig.value= 1 / b;
}

// to carry out the plus or minus operation

function plusOrMinus(){
   inputBig.value = -1 * b;
}