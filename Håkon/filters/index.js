function slect(selector){
    
    const checkboxes = document.getElementsByClassName("show-task");
    
    console.log(checkboxes)
    if(selector.checked == true){
        
        for(let i = 0; i < checkboxes.length; i++){
            checkboxes[i].checked = true;
            
        }
        console.log("Truls");
    }else{
        for(let i = 0; i < checkboxes.length; i++){
            checkboxes[i].checked = false;
        }
        console.log("heisann");
    }  
}

function myFunction(colaborator){
    let checkBox = document.getElementById(colaborator);

    let tasks = document.getElementsByClassName("task");

    for (let i = 0; i < tasks.length; i++){
    
    let tasks2 = tasks[i].children;
    let tasks3 = tasks2[0].children;
    let tasks4 = tasks3[1].innerHTML;
    console.log(tasks4);
    console.log(checkBox.value);

        if(tasks4.toLowerCase() == (checkBox.value).toLowerCase()){

            if(checkBox.checked == false){
                tasks[i].style.display = "none";
        
            }else{
                tasks[i].style.display = "block";
            }
        }
    }
}

