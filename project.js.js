var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit Event
form.addEventListener('submit',addItem);    //adding

// Delete event
itemList.addEventListener('click',removeItem);

//Filter Event
filter.addEventListener('keyup',filterItems);
//ADD item

function addItem(e)
{
    e.preventDefault();

    //Get input value

    var newItem = document.getElementById('item').value;


    //Create new li element.

    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';

    //ADD text node with input value
    li.appendChild(document.createTextNode(newItem));


    // Create delete button element
    var deleteBtn = document.createElement('button');
    

    //Add class
    deleteBtn.className ='btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li.
    li.appendChild(deleteBtn);

    //Append li to the UL.
    itemList.appendChild(li);
}


//Remove Item

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?'))
        {
            var li =  e.target.parentElement;
            itemList.removeChild(li);           //ul se remove
        }
    }
}


//Filter Items
function filterItems(e)
{
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    //Get list items
    var items = itemList.getElementsByTagName('li');
    //Convert to an array
    Array.from(items).forEach(function(item)
    {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    });
}
