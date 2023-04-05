/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.
*/
var maxNumberOfBalloons = function(text) { // first attempt (not great memory)
    const balloon = new Map([
        ['b', 1],
        ['a', 1],
        ['l', 2],
        ['o', 2],
        ['n', 1],
    ]);
    const guess = new Map([
        ['b', 0],
        ['a', 0],
        ['l', 0],
        ['o', 0],
        ['n', 0],
    ]);
    const arr = [];
  
    for(let char of text){
        if(guess.has(char)){
            let val = guess.get(char);
            guess.set(char, val + 1)
        }
    }
    for(let char of 'balon'){
        arr.push(Math.floor(guess.get(char) / balloon.get(char)))
    }
    let answer = arr[0];
    for(let num of arr){
        if(num < answer) answer = num;
    }
    return answer;
};

var maxNumberOfBalloons = function(text) { // Refactored (beats 99.17% runtime), better but still not so good memory
    const balloon = new Map([
        ['b', 1],
        ['a', 1],
        ['l', 2],
        ['o', 2],
        ['n', 1],
    ]);
    const guess = new Map([
        ['b', 0],
        ['a', 0],
        ['l', 0],
        ['o', 0],
        ['n', 0],
    ]);
    let answer = text.length;
    for(let char of text){
        if(guess.has(char)){
            let val = guess.get(char);
            guess.set(char, val + 1)
        }
    }
    for(let char of 'balon'){
        let ratio = (Math.floor(guess.get(char) / balloon.get(char)));
        if(ratio < answer) answer = ratio;
    }
    return answer;
};