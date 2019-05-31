function select(source){
    const checkboxes = document.getElementsByName("show-task");

    for(let checkbox in checkboxes){
        checkbox.checked = source.checked;
        console.log("hei");
    }
}

function myFunction(){
    let checkBox = document.getElementById("show-task");

    let kak = document.getElementById("kak");

    if(checkBox.checked == false){
        kaka.style.display = "none";
    }else if(checkBox.checked == true){
        kak.style.display = "block";
    }
}