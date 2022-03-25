//-----------------------------------
// find the total of event odd and compare between them
function test(test)
{
let even =[];
let odd=[];
let even_total=0;
let odd_total=0;
let number=test.split("");
for(let i=0;i<number.length;i++){
    if(number[i]%2==0){
       even_number=parseInt(number[i])
        even.push(even_number)
    }
    else {
        odd_number=parseInt(number[i]) 
        odd.push(odd_number);
    }
}

for(let j=0;j<even.length;j++){
    even_total+=even[j]
}
for(let k=0;k<odd.length;k++){
    odd_total+=odd[k];
}
console.log(even_total)
console.log(odd_total)
if(even_total > odd_total){
    return "event"
}
else if(even_total<odd_total){
    return "odd"
}
else {
    return "equal"
}
}


console.log(test("5564"))
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// find sub without sub sing
//دالة تقوم بعملية الطرح من دون عملية الطرح
function subtract( x,  y) 
{ 
	let borrow=0
	while (y != 0) 
	{ 
		
		 borrow = (~x) & y; 

		x = x ^ y; 

		y = borrow << 1; 
	} 
	return x; 
} 
console.log(subtract(5,8))

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// find sum Total between two string value
function addStrNums(num1, num2) {
  let result=0;
  let number1=0;
  let number2=0;

  if (num1.match(/\d/g) && num2.match(/\d/g)) {
     
    number1=parseInt(num1)
    number2=parseInt(num2)
    result=number1+number2;
    return result;

 }
   


 else if(num1 !=/\d/ || num2 ==/\d/){
    result=-1;
    return result;
 
 

}
}

console.log(addStrNums('p',"4"))

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
// حروف العلة 
function firstNVowels(phrase, n) {
    // write your code here
    let a=" aouieAEOUI";
    let result=[];
    let str=phrase.split("")
    let limit=0;
    if(n > 5){
    return "invalid";
    }
    else {
        
        for(let i = 0 ; i <str.length ; i++){
            if(a.indexOf(str[i])>0){
         
                if(result.length < n){
                result.push(str[i])
                
            }
            else break
             
            }
            
            
        }
        
         return result.toString().replaceAll(",","")
    }
 
    
}
  console.log(firstNVowels("mohamEeAd",5))

  // -------------------------------------------------------------------------------------------------------------------------------------------------------------
  // convert from number to string
  function numToEng(n) {
    // write your code here
    const ones = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const tens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety',]
    const hundred = ' hundred ';
    let result;
    
    if (n>=0 && n <20) {
        return ones[parseInt(n)];
    } 
    else if (n >= 20 && n < 100) {
        n = n.toString();
        let num_array = n.split('');

        if (parseInt(num_array[1]) == 0) {
            result = tens[parseInt(num_array[0]) - 2]
        } 
        else
            result = tens[parseInt(num_array[0]) - 2] + '-' + ones[parseInt(num_array[1])]

        return result;
    }
    
    else if (n >= 100 && n < 1000) {


        n = n.toString();
        let num_array = n.split('');
        let num = num_array[1].toString() + num_array[2].toString();
        let result = ones[parseInt(num_array[0])] + hundred + numToEng(parseInt(num))
        return result;
    }

}

console.log(numToEng(542));
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
// التحويل من تماني الى تنائي
function octToBin(octal) {
	// write your code here
	const binary =['000','001','010','011','100','101','110','111']
  const number=octal.toString().split("");
 
  let result='';
  for (const num of number) {
      result+=binary[parseInt(num)];
  }
  return parseInt(result);
	
}
console.log(octToBin(10))

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// التحويل من تنائي الى تماني
function binToOct(b) {
    
    const arr = ['000', '001', '010', '011', '100', '101', '110', '111'];
    
    let temp;
    let text = '';
    let value = b.length%3
    switch (value) {
        case 1:
            b = '00' + b;
            break;

        case 2:
            b = '0' + b;
            break;

        default:
            break;
    }
    for (let index = 0; index < b.length; index += 3) {

        
        temp = b.slice(index, index + 3);
      
        for (let i = 0; i < arr.length; i++) {
            if (temp == arr[i]) {
                text += i;
            }

        }
    }
    return parseInt(text);

}
console.log(binToOct("1000000"))
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// دالة تقوم بالتحقق من العمليات الرياضية
function mathExpr(expr) {
  let opreation="-+/*%";
  let check =expr.toString().split("");
  for(let i=0; i<check.length;i++){
  if(/\D/.test(check[i])){
      if(opreation.indexOf(check[i]) > 0)
        return true
      
      
  }
 
  
  }
  return false

}

console.log(mathExpr('5&r'))
//-------------------------------------------------------------------------------------------------------------
// فصل الكلمات
function capSpace(txt) {
    // write your code here
   let text=txt.split("");
  // console.log(text)
   let result="";
   for(let i=0;i<text.length;i++){
       if(text[i] == text[i].toUpperCase())
       {
           text[0]=text[i]+" ";
           text[i]=" "+text[i]
       }
     
           result=(result+text[i]).toLowerCase();
       
   }
    return result;
  }
console.log(capSpace("IloveProgramming"))

//-----------------------------------------------------------------------------------------------------
/*
التحويل من 12 ساعة إلى 24 ساعة والعكس
*/
function convertTime(time) {
    // write your code here

    let hour = time.split(':');
    let minute = hour[1].split(' ');
    if(minute[1]=="am"||"pm")
    {
       
        
        if(parseInt(hour[0])==12){
            return parseInt(hour[0])+":"+parseInt(minute[0]) 
        }
        else
        {
            return parseInt(hour[0])+12+":"+parseInt(minute[0]) 


        }

  }  
        
    }
    
        {
            if(parseInt(hour[0])>=12){
                return parseInt(hour[0])-12+":"+parseInt(minute[0]+"pm") ;
            } 
            else{
                return parseInt(hour[0])+0+":"+parseInt (minute[0]+"am");
            }
            
        }
    
}
console.log(convertTime("12:00 pm"))