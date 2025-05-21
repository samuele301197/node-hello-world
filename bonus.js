function contaVocali(stringa) {
const vocali = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

for (let i = 0; i < vocali.length; i++) {
 if(vocali.includes(stringa[i])){
count ++;
 }   
}
return count;
}

const name = process.argv[2]
// console.log(contaVocali(name));
export default contaVocali





