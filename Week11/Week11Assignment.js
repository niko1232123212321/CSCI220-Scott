
//Check to see what happens if a button is clicked.
 var itemCounter = 4;  //Set to 4 to exclude other elements with IDs already.


function AddItem()
{
//If the textbox is not empty,
    //Get the text from the textarea
    var listText = document.getElementById("2").value;

    //create a new list node
    var newListItem = document.createElement('li');

    //set the text content to the new list.
    newListItem.textContent = listText;

    //add a listener to the new child item
    newListItem.addEventListener('click', AddClickEventToTheListItemPls);

    //add an id to the item
    newListItem.id = itemCounter;

    //create a new item
    document.getElementById("3").appendChild(newListItem);

    //alert("Item added to list.");

    //Increase item counter.
    itemCounter= itemCounter + 1;
}

function clearList()
{

    //While there are items in the list,
    while(itemCounter > 4)
    {
        var itemCounterString = (itemCounter - 1).toString();  //Length of the item counter is 1 too high...
        var itemToRemove = document.getElementById(itemCounterString);
        //Remove item from the list
        document.getElementById(itemCounterString).remove();

        //Decrease the counter.
        itemCounter = itemCounter - 1;
    }
}

function AddClickEventToTheListItemPls(childText)
{
    //Change the text to being crossed out
    var updatedText = "<del>" + childText.target.outerHTML + "</del>";
    childText.target.outerHTML = updatedText;

}
