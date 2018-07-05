# Console Tricks!

## Project introduction
Introduction several console tricks, including test and error

## Demo
https://cocolin041.github.io/Javascript30/09%20-%20Dev%20Tools%20Domination/

## JS
1. ```console.log('string %s string', 'insert string')```<br>
2. ```console.log('%c give this text some style', 'color: red')```<br>
3. ```console.warn('some warning message')```<br>
4. ```console.error('some error message')```<br>
5. ```console.info('some information message')```<br>
6. ```console.assert(some function that should return true/false, 'some message that will show if return false')```<br>
7. ```console.assert(function_you_want_to_test, 'some message that will show if it's fail')```<br>
8. ```console.log(element)```<br>
Will print the element
9. ```console.dir(element)```<br>
Will print the detail of the element
10. ```console.group```<br>
```
console.group('each group name');
//do something that will be shown in the group here
console.groupEnd('each group name');
```
11. ```console.time```<br>
Calculate the time that browser run something<br>
```
console.time('timing name');
//do something here, either function, for loop, or fetching data
console.timeEnd('timing name');
```