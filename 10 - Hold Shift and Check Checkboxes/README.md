# Hold Shift to Check Multiple Checkboxes

## Project introduction
Hold Shift key to select multiple checkboxes, or un-select multiple checkboxes.

## Demo
https://cocolin041.github.io/Javascript30/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/

## JS
1. Learn to set a dummy variable with value of true/false, this dummy variable could let you mark a range, and do something with it.<br>
```
let lastClicked;
  
function multipleCheck(e) {
  if (e.shiftKey && this.checked) {
    let inBetween = false;
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastClicked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastClicked = this;
}
```
2. ```e.shiftKey```<br>
event that have shiftKey being pressed<br>