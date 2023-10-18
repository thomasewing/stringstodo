// class SinglyLinkedList{
//     constructor(){
//         this.head = null
//         this.length=0
//     }

//     insert(val, index=this.length){

//         const newNode = new ListNode(val);

//         let runner = this.head;
//         let prev = this.head
//         let currentNode =0

//         while (currentNode < index){
//             prev = runner
//             runner = runner.next
//             currentNode++
//         }
//         prev.next = newNode
//         newNode.next=runner
//     }

//     addToBack(val){
//         const newNode = new ListNode(val);

//         if (this.head===null){
//             this.head=newNode;
//             return this;
//         }
//         let runner =this.head;

//         while (runner.next){
//             runner=runner.next;
//         }

//         runner.next=newNode;
//         return this
//     }

//     addToFront(val){
//         const newNode=new ListNode(val);
//         const tempHead=this.head;
//         this.head=newNode;
//         this.head.next=tempHead;
//     }



//     display(){
//         let runner=this.head
//         let resultString ="";

//         while (runner){
//             resultString += `(${runner.value}) -> `;
//             runner=runner.next
//         }
//         resultString+="null";
//         console.log(resultString)
//     }



// }


// class ListNode{
//     constructor(val){
//         this.value=val
//         this.next=null
//     }
// }

// const SLL = new SinglyLinkedList();
// SLL.addToBack("if");
// SLL.addToBack("you");
// SLL.addToBack("cant");
// SLL.addToBack("shutup");
// SLL.addToBack("then");
// SLL.addToBack("plz");
// SLL.addToBack("die");
// console.log(SLL.head);
// SLL.display();


// // console.log (1+2+"3"+"4"+5+6)

// //ex. 1
// var funStr = "Emma shreds on her electric cello";
// console.log(typeof funStr); // "string"
// var oneChar = funStr[26]; // "c"
// console.log(typeof oneChar); // "string"

// //ex. 2
// console.log(funStr.length); // 33
// console.log("".length); // 0

// //ex.3
// wordArray = funStr.split(" "); 
// // Note: " " never appears in result: 
// // [ "Emma", "shreds", "on", "her",
// // "electric", "cello" ]
// console.log(wordArray [5].split("")); 
// // Split on every letter:
// // [ "c", "e", "l", "l", "o" ]  

// //ex.4
// console.log(wordArray.join());
// // Note: "," is used by default:
// // "Emma,shreds,on,her,electric,cello"
// console.log(wordArray.join("-"));
// // Param "-" inserted between words:
// // "Emma-shreds-on-her-electric-cello"
// console.log(wordArray.join(""));
// // "Emmashredsonherelectriccello"

// var removeBlanks = "Pla yTh atFun kyMusic"
// wordArray = removeBlanks.split(" ");
// console.log(wordArray.join());
// console.log(wordArray.join("-"));
// console.log(wordArray.join(""));

// function removeBlanks(str) {
//     let newStr = " "
//     for (let i=0;i<str.length;i++){
//         if (str[i] !==" "){
//             newStr += str[i]
//         }
//     }
//     return newStr
// }

// console.log(removeBlanks("You rStri ngHere"))

// function getDigits(str) {
//     let newStr =" "
//     for (let char in str){
//         if (!isNaN(str[char])){
//             newStr += str[char]
            
//         }
//     }
//     console.log(newStr)
// }

// getDigits("g6o0e3a4t7s5h4i1t7")

// function acronyms(str){

//     let wordArray = str.split(' ')
//     let acroStr = " "
//     for(let word in wordArray){
//         if (wordArray[word].length>0){
//             acroStr+=wordArray[word][0].toUpperCase()
//         }
        
//     }

//     return acroStr
// }

// console.log(acronyms("every good boy does fine"))

// function countNonSpaces(str){
//     let counter =0

//     for(let char in str){
//         if(str[char]!=" "){
//             counter++
//         }
//     }
//     return counter
// }

// console.log(countNonSpaces("Yo what the heck is up!"))

function removeShorterStrings(array,wordLength){
    let newStr =[]
    let next=0

    for(let value in array){
        if(array[value].length>=wordLength){
            newStr[next++]=(array[value])
        }
    }
    return newStr
}

console.log(removeShorterStrings(['hello','how','the','heck','are','you','doing'],4))