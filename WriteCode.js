function sumZero(array){
    var result = false;
    for (var i = 0; i < array.length; i++) {
    for (var k = i + 1; k < array.length; k++) {
        if (array[i] + array[k] === 0) {
         result = true;
        }
        }
    }
    return (result)
}

console.log(sumZero([0, 21, 33, 9, 1, -9]))

//TC: O(n^2) since I'm running my inputs through two for loops and checking everything against everything else
//SC: O(1) since the array length is already declared by whatever is passed in- the function itself doesn't take up any space.
function uniqueCharacters(str){
    str = str.toLowerCase()
    return new Set(str).size === str.length;
}

console.log(uniqueCharacters('Moonday'))

//TC: O(n) since no matter how big the string, it's only iterating over the string and adding to the set once- and then checking if the two sizes are the same.
//SC: O(n<26) since the space being taken up is taken by the set's size; and it can only get to 26(the letters in the alphabet.)

function pangram(str){
    str = str.toLowerCase();
    str = str.replace(/[^a-z]/g, ' ')
    str = str.split(' ')
    str = str.join('')
    return new Set(str).size === 26
}

console.log(pangram('Sphinx of Black Quartz, Judge my Vow!@#$%^&*()123456789'))

//TC: O(n) since all this does is change the string into only letters, then iterate over the string once and add to the new set; and then we check if the set size is 26(the size of the alphabet.)
//SC: same as the previous function, O(n<26).
//(also, you can see me testing if my regEx was working right- I'm proud that it did even though my understanding of it is super basic lol)

function longestWord(arr){
    answer = ''
    for(i=0; i< arr.length; i++){
        if (arr[i].length > answer.length){
            answer = arr[i]
        }
    }
    return answer
}
console.log(longestWord(["hi", "hello", "qwertyuiop"]))

//TC: O(n) since all this does is loop over the array once and see if the length of each word is longer than the previous longest, and if so, it replaces the old longest world.
//SC: O(n) where n is the length of the longest word. if the word is really long, the space allocated for "answer" grows. However, it's not in relation to the length of the array, which is interesting.
