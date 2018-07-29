//#region 
var array1=[1,8,3,4]
var array2=array1
array1[0]=100
console.log(array1[0]);
console.log(array2[0]);
console.log(array1.length)
console.log(array1.sort(function(a,b){
    return b-a;
}))

//#endregion

//#region 
var myVariable="BAKI"
var referVariable=myVariable
myVariable="ISSA"
//alert(myVariable)
console.log(myVariable)  
console.log(referVariable)
//#endregion

//#region 
var myString="My name is Baki, I am Just awesome Baki Baki Baki";
var foundAtPosition=myString.indexOf("Baki");
var foundAtPosition1=myString.lastIndexOf("Baki");

console.log("Founded Position:"+foundAtPosition)
console.log("Founded last Position:"+foundAtPosition1)

var foundedIndex=0
var totalOccurence=0

while(foundedIndex!=-1)
{
   foundedIndex=myString.indexOf("Baki",foundedIndex)
   
   if (foundedIndex!=-1)
   {
       foundedIndex++;
       totalOccurence++;
      
   }
}
console.log(totalOccurence)

//#endregion