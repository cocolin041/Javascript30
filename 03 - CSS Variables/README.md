# JS + CSS Clock

## Project introduction
Use scroll bar to change three variables and change the img style (padding, color, blur) at the same time

## Demo
https://cocolin041.github.io/Javascript30/03%20-%20CSS%20Variables

## CSS
1. CSS variables: <br>
Without sass, we could finally use variables in css<br>
Use ```--spacing``` in setting variable values, and use ```var(--spacing)``` in giving variable to certain style
```
:root {
  --spacing: 5px;
}
img{
  padding: var(--spacing);
}
```
<br>reference: https://www.w3schools.com/css/css3_variables.asp

## JS
1. dataset method: <br>
in HTML, we could give ```data-*``` in element attributes, and use ```element.dataset``` to get the value<br>
For example, we have ```<input data-sizing="px">``` so we can use ```input.dataset.sizing``` to get the ```px``` value