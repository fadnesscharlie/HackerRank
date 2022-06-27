Find a way to locate our land first
From our land we want to be able to explore kind of the edges to see if this land ends


recursion function that once finished, as long as there is an island


nested for loop, right and down,

i first loop, thats going to go left
j second loop, that going to go down

as long as their is a j that is land, change 1 to 2, continue,
if there is no land, then we want to move in our first loop

once we reach a land, we want to change the one into a two, and then we want to check the right and bottom, if there is a right or bottom, then we want to change those to 2's

As long there is a two, we want to keep moving

Once we are done, we want to increase the counter by 1, then we want to call our function again to find a one,


when there is no more land, or length of grid i and length of grid j is maxed -- end of grid, break out of our function

return our counter