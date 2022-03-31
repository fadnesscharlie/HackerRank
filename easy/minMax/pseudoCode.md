# Minumum and Maximum Plan Stage

## Input/Output

Input: [ 1, 2, 3, 4, 5 ]
Output: Max - 14, Min - 10

## Algorithm

Add all values together
- save as sum
Create a loop
- minus each placement value by the total
- create two variables that will hold the minumum and maximum values
- compare min and max values by each minused value

Return min and max

## Pseudo Code

function name - parameter is array  
built in methods - reduce to add all the values  
else - create a loop to add all values  

store value as sum

use map, map through each position, minus each value by our sum
- set minumum value as sum
- set maximum value as 0
compare each mapped position with max and min, if so, replace value

return of max and min

## Edge Case/Testing

- Negatives
- Whole Number
- TypeOf Number
- Null
- Empty Values
- Not enough Values

## Big 0

Time: 0(2n)
Space: 0(1)
