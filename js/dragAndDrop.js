var id;
function allowDrop(ev)
{
    event.preventDefault();

}

function dragStart(ev)
{
    id=ev.target.id;

}
function drop(ev)
{
    var nodeCopy = document.getElementById(id).cloneNode(true);
    nodeCopy.id = "newId"; /* We cannot use the same ID */
    ev.target.appendChild(nodeCopy);
   //ev.target.append(document.getElementById(nodeCopy));
 
}


