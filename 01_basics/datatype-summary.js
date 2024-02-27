/* 2 type of datatype
   1. premitive datatype (call by value)

         1. string                 2. number                3. null
         4. boolean                5. undefine              6. symbol ( value ko unique banana ka liya)
         7. BigInt
*/

 const  score ="100"
 const  num   =100.2
 const  bool  =false
 const  null1  ="";
 const  num1  =undefined
 const  id    =Symbol('1234')
 const  anotherid =Symbol('1234')
 console.log(id === anotherid);

/*
   2. non premitive datatype (Reference type)
         
         1. Array               2. Object                3. Function
   
     */
      // Array

         const hero =["ali","numan","mubashir"];
      // Object

         let myObj={
            name:"mubashir",
            age :22,
         }

      // Function

      let myfun =function(){
          console.log("hello gii")
      }
      console.log(myfun);

      