# Richest Customer Wealth

## Input/Output

```
Input: [[1,2,3],[3,2,1]]

Output: 6
```

```
Input: [[1,5],[7,3],[3,5]]

Output: 10
```

## Algorithm

Set a max to 0
Loop over the array
- Loop over second array
- Add numbers in second array
- Compare result with max
Return max

## Pseudo Code

Create a maxWeath function takes in accounts are arguments

Check to see if accounts exsist
- If nothing, return 0

Declare richest = 0

for loop over first/outer array  
- delcare tempMax = 0  

Then loop over the second array  
- Add values in the second array to tempMax  
- Once complete, compare tempMax to richest  
- if tempMax is larger then richest
  - richest = tempMax

Return richest

## Edge Case/Testing

- Check for values/accounts
- Make sure its an array
- Testing each account value/input
  - to be a number
  - not to null
  - empty
- Test output
- Test result will be a number

## Big O

Time: O(n^2)

Space: 0(n)