

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowel =['a','e','i','o','u'];
    for(let i=0;i<s.length;i++){
        if(vowel.includes(s[i])){
            console.log(s[i]);
        }
    }
    for(let i =0;i<s.length;i++){
        if(!vowel.includes(s[i])){
            console.log(s[i]);
        }
    }
}

