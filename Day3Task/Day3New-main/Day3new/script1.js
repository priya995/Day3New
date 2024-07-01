//qn:1
let obj1={
   name:"person1",
   age:5
 }
 let obj2={
   age:5,
   name:"person1"
 }
 let a=JSON.stringify(obj1);
 let x=JSON.parse(a)
 let b=JSON.stringify(obj2);
 let y=JSON.parse(b);
 if(x===y)
   {
     console.log("JSON having same value");
   }
   else{
     console.log("JSON having different value");
   }