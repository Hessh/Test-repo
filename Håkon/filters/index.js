function filterAllOnOff(selector){
    
    const checkboxes = document.getElementsByClassName("select-name");
    
    
    console.log(checkboxes)
    if(selector.checked == true){
        
        for(let i = 0; i < checkboxes.length; i++){
            checkboxes[i].checked = true;
        }
        console.log("På");
    }else{

        for(let i = 0; i < checkboxes.length; i++){
            checkboxes[i].checked = false;
        }
        console.log("Av");
    }  
}

function nameSelector(colaborator){
    let checkBox = document.getElementById(colaborator);
    let tasks = document.getElementsByClassName("task");

    for (let i = 0; i < tasks.length; i++){
    
    let tasks2 = tasks[i].children;
    let tasks3 = tasks2[0].children;
    let tasks4 = tasks3[1].innerHTML;

        if(tasks4.toLowerCase() == (checkBox.value).toLowerCase()){

            if(checkBox.checked == false){
                tasks[i].style.display = "none";
        
            }else{
                tasks[i].style.display = "block";
            }
        }
    }
}

