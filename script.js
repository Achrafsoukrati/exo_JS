

//1-Reverse a String
function revers(word){
    
    return  word.split('').reverse().join('')
};



//2-Count Characters
function count(words){
   return words.length
};




//3-Capitalize Words
function capitalizeFirstLetter(sentence) {
   // Diviser la phrase en un tableau de mots
   let words = sentence.split(" ");
   
   // Parcourir chaque mot
   for (let i = 0; i < words.length; i++) {
       // Mettre en majuscule la première lettre de chaque mot
       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
   }
   
   // Rejoindre les mots en une seule phrase
   let capitalizedSentence = words.join(" ");
   
   return capitalizedSentence;
}



  //4-Find Maximum and Minimum
function maxmin(arr){
    
   let max = Math.max(...arr);
   let min = Math.min(...arr);

   return `maxi is ${max} and min is ${min}`  ;
};

  //5-Sum of Array

  function sumArr(tabl){
   let result = 0
   for(let i=0;i < tabl.length;i++){
      result += tabl[i];
     };
     return result
   
  };



    //6-Filter Array
  function filterArray(arr, condition) {
   let filteredArray = [];

   // Parcourir chaque élément du tableau
   for (let i = 0; i < arr.length; i++) {
       // Vérifier si l'élément satisfait la condition
       if (condition(arr[i])) {
           // Si oui, l'ajouter au nouveau tableau filtré
           filteredArray.push(arr[i]);
       }
   }

   // Retourner le tableau filtré
   return filteredArray;
};



  //7-Factorial
  function facto(num){
   if(num ==0 || num == 1){
      return 1
   } 
   else  {
      let result=1;
      for (let i=1; i <= num ; i++){
         result *= i
    }
    return result
   };
  };
  
   //8-primeNumber

   function prim(val){
      if (val % 2 != 0){
         return `${val} is a prime number`
      } else {
         return `${val} is not a prime number`
      }
   };
   
   //9-Fibonacci
   function fibonacci(n) {
      if (n <= 0) {
          return "Veuillez entrer un entier positif pour calculer la suite de Fibonacci.";
      } else if (n === 1) {
          return [0];
      } else {
          let fib = [0, 1];
          for (let i = 2; i < n; i++) {
              fib.push(fib[i - 1] + fib[i - 2]);
          }
          return fib;
      }
  }
  
  // Exemple d'utilisation
  console.log(fibonacci(10)); // Retourne les 10 premiers nombres de Fibonacci
  


