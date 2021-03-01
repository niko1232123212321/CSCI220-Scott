


function range(start, end)
{
    myArray = new Array();
    
    for(i = start; i <= end; i++)
        {
            myArray[i] = i;
        }

    return myArray;
}

function sum()
{
    numSum = 0;
    for(number in numberArray)
    {
        numSum += numberArray[number];
    }
}



console.log(sum(range(1,10)));