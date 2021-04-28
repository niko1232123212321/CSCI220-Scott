//Wow,that was more difficult than I thought.
//Let's step through and explain what I did here
//First, loading the items from the file.
function AddItemsFromFile()
{
    //Set up a loop for each item
    for(i= 0; i < 4; i++)
    {
        //Declare a variable
        var item;
        //Switch statement to determine which item to load into the item variable
        switch(i)
        {
            case 0:
                item = item1;
                break;
            case 1:
                item = item2;
                break;
            case 2:
                item = item3;
                break;
            case 3:
                item = item4;
                break;            
        }

        //Add items from item variable into HTML file
        $(itemTable).append(
            '<tr id="'+ item.itemid +'">'
            + '<td><img src='+ item.image +' class="picture'+ i +'"></img></td>'
            + '<td>' + item.productName + '</td>'
            + '<td>' + item.description + '</td>'
            + '<td>'+ item.manufacturer +'</td>'
            + '<td>'+ item.itemid +'</td>'
            //item quantity needs to have a unique id so we can alter it later.
            + '<td> <input type="number" id="itemQuantity' + i +'" min="1" max="'+item.available+'" value="'+ item.quantity+ '"></td>'
            + '<td>$'+ item.price +'</td>'
            + '<td>'+ item.available +'</td>'
            //Same with the button here.
            + '<td><button id="button'+ i +'" class="btnRemove">Remove Item</button></td>'
            +'</tr>');
       //document.getElementById(("itemQuantity"+ i)).addEventListener(onblur, calculateTotal);
    }
    //Calculate the total from the pre-determined cart.
    
}

function calculateTotal()
{
    //create var subtotal to display.
    var subTotal = 0;
   
    var quantityOfItems, priceOfItems;




    if(document.getElementById("itemQuantity0") != null)
    {
    quantityOfItems = document.getElementById("itemQuantity0").value;
    priceOfItems = (item1.price * quantityOfItems);
    subTotal = subTotal + priceOfItems;
    }

    if(document.getElementById("itemQuantity1") != null)
    {
    quantityOfItems = document.getElementById("itemQuantity1").value;
    priceOfItems = (item2.price * quantityOfItems);
    subTotal = subTotal + priceOfItems;
    }
    if(document.getElementById("itemQuantity2") != null)
    {
    quantityOfItems = document.getElementById("itemQuantity2").value;
    priceOfItems = (item3.price * quantityOfItems);
    subTotal = subTotal + priceOfItems;
    }
    if(document.getElementById("itemQuantity3") != null)
    {
    quantityOfItems = document.getElementById("itemQuantity3").value;
    priceOfItems = (item4.price * quantityOfItems);
    subTotal = subTotal + priceOfItems;
    }
 $(subtotal).text("Subtotal: $" + subTotal);
}

AddItemsFromFile();
calculateTotal();

//No time to dynamically fix these up, gotta type 'em one by one...
//Remove button listeners.
$(button0).on('click', function()
{
  this.parentElement.parentElement.remove();
  calculateTotal();
})
$(button1).on('click', function()
{
  this.parentElement.parentElement.remove();
  calculateTotal();
})
$(button2).on('click', function()
{
  this.parentElement.parentElement.remove();
  calculateTotal();
})
$(button3).on('click', function()
{
  this.parentElement.parentElement.remove();
  calculateTotal();
})

//Value change listeners
$(itemQuantity0).on('change', function()
{
    calculateTotal();
});
$(itemQuantity1).on('change', function()
{
    calculateTotal();
});
$(itemQuantity2).on('change', function()
{
    calculateTotal();
});
$(itemQuantity3).on('change', function()
{
    calculateTotal();
});


