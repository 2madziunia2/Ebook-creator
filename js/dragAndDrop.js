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
    ev.target.append(document.getElementById(id));
    
}