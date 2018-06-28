# JS + CSS Clock

## Project introduction
Create a clock with hour, minute, second hand and run with currentTime

## Demo
https://cocolin041.github.io/Javascript30/02%20-%20JS%20and%20CSS%20Clock

## CSS
1. transition<br>
transition-timing-function: choose timing function to decide which kind of animation to show
2. transform<br>
transform-origin: default origin is on the center of an element, if we given 100% to it, the center will set on the very right of the element
3. transform: rotate(90deg)<br>
rotate around the center

## JS
1. new Date(): <br>
could get the current date and time
2. getSeconds(), getMinutes(), getHours(): <br>
methods of Date(), could get seconds, minutes and hours of the time
3. Template literals: <br>
``` style.transform = `rotate${variable_deg}deg` ```
