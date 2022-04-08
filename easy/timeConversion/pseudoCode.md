# Time Conversion Plan Stage

## Input/Output

Takes in a string with the time format 12:00:00AM

Input: 07:05:45PM
Output: 19:05:45

Input: 07:05:45AM
Output: 07:05:45

Input: 12:12:12AM
Output: 00:12:12

Input: 11:12:12PM
Output: 23:12:12

Input: 09:12:12PM
Output: 21:12:12

## Algorithm

We need to create a few test cases:
- if AM or PM
- if 12AM
- if less then 7PM
- if greater then 8PM

after we look at our test cases, we want to be able to change the numbers accordingly to match the correct 24 version.

Under AM
- if 12AM, we need to return arr[0][1] to 00
- Anything else, we return the original number
- Remove AM

Under PM
- We need to add '12' to the hour
- Ex. 01:00:00PM would be 13:00:00
- if arr[1] is less than 7
  - then we want to change arr[0] to 1.
  - add 2 to arr[1]
- if arr[1] is greater then 8
  - then we want to change arr[0] to 2.
  - add 2 to arr[1]
    - take the result[1]
- Remove the PM

## Pseudo Code

12 : 00 : 00 PM
12 3 45 6 78 90
function timeConversion takes in a string with a date format

edge case testing here


if date[9] === A
- if date[0] === 1 && date[1] === 2
  - return date[0] = 0 and date[1] = 0
- then
  - date[9] = ''
  - date[10] = ''
  return date

if date[9] === P
- if date[1] < 7
  - date[0] = 1
  - date[1] = date[1] + 2

- if date[1] > 8
  - date[0] = 2
  - num = date[1] + 2 - 10
  - date[1] = num 
- then
  - date[9] = ''
  - date[10] = ''
  return date

## Edge Case/Testing

- Check to see if the string is in Date Format
- Make sure in AM or PM format
- Make sure its a string
- Make sure there is no decimals
- Make sure there is no fractions

## Big O

Time: O(1)
Space: O(1)