# Lonely Integer

## Input/Output

Input: [1, 2, 3, 4, 3, 2, 1]
Output: 4

Input: [1, 1, 1, 1, 1, 2, 2, 3, 3]
Output: 1

## Algorithm

Create an empty result array

What we want to do is to take each number. loop through them and and do a few things:
- See if it is in our result array or not
- If it is not, push it to our array
- If it is, then delete it from our array

In finding it, we will use built in methods like indexOf and splice to find the index of our number if its in our array, and then remove it if true

Once we are finished with looping through our array, we want to return our final number.

## Pseudo Code

declare function with array parameter  
declare result array

Map through data and for each element  
if element is at indexOf:  
if we get -1 back, then we want to push it into our array   
if we get anything else, splice that number and remove it from our array

after our loop, we want to return back our array with our last number.

## Edge Case/Testing

- If there are multiple single numbers
- all items in the array are whole numbers
- all items in the array are integers
- if there will be a single number left over
- if there will be a value and not null or empty element in the array

## Big O

Time:
Space: