var newItem2 = document.getElementsByClassName("column-2");
var i = 1;
function myFunction()
{
    var newItem = document.createElement("div");
    newItem.innerHTML = '<div class="item task"><div class="content">'+
    '<h4>' "Title" '</h4><h5>Name</h5><p>Innhold</p></div>'+
    '<div class="progress"><div class="button">Trykk</div>'+
    '<div class="button">nr</div>'+
    '<div class="button"></div>'+
    '</div></div>';
    document.getElementsByClassName("column-4")[0].appendChild(newItem);
    ++i;


};