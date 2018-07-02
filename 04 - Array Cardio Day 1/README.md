# Array Cardio

## Project introduction
Use scroll bar to change three variables and change the img style (padding, color, blur) at the same time

## Demo
https://cocolin041.github.io/Javascript30/04%20-%20Array%20Cardio%20Day%201

## JS
1. ```Array.prototype.filter()```
array.filter(fun)<br>
//this is a filter rule<br>
function fun() {
  return filtered_data
}
2. ```Array.prototype.map()```
3. ```Array.prototype.sort(compareFunction)```:<br>
if the return value of ```compareFunction(a, b)``` is smaller than 0, then ```a``` will be put before ```b```<br>
reference: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

4. ```Array.prototype.reduce()```:<br>
Use in accumulating data<br>
```
array.reduce((accumulation, data) => accumulation + data.value, initialValue_of_accummulation)
```

5. ```Array.from()```: <br>
map can only be used onto array, so we convert list into array by using ```Array.from(list)```

6. ```textContent```<br>
Difference between the four methods:<br>
* nodeValue: is a little more confusing to use, but faster than innerHTML.
* innerHTML: parses content as HTML and takes longer.
* textContent: uses straight text, does not parse HTML, and is faster.
* innerText: Takes styles into consideration, won't get hidden text for instance.

7. ```Array.prototype.includes()```<br>
Decide whether an array includes an element<br>
```
'abc'.includes('a')  //true
```

