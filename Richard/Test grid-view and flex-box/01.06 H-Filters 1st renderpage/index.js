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

(function ()
{

            const _doc = window.document;

            const _assignments = 
            [
                {id: 10, title: ".js", name: "Petter", content: "Det skal skrives .js kode",
                column: 4, display: "block"},

                {id: 12, title: "CSS", name: "Anders", content: "CSS ferdigstilles",
                column: 4, display: "block"},

                {id: 17, title: "Idemyldring", name: "Sofie", content: "Idemyldring",
                column: 4, display: "block"}, 
            ]

            _assignments.push({id: 30, title: "HTML", name: "Lars", content: "Se over HTML",
                column: 3, display: "block"});
            _assignments.push({id: 32, title: "Annet", name: "Julie", content: "Lagre data localt"});
        

            function init()
            {
                renderPage();
            }

            function renderPage()
            {
                let item, assignments, i = 0;
                for (assignments of _assignments)
                {
                    let column = assignments.column;
                    item = document.createElement("div");
                    item.innerHTML = '<div class="item task">'+
                    '<div class="content">'+
                            '<h4>'+assignments.title+'</h4>'+
                            '<h5>'+assignments.name+'</h5>'+
                            '<p>'+assignments.content+'</p>'+
                        '</div>'+
                        '<div class="progress">'+
                            '<div class="button">todo</div>'+
                            '<div class="button">doin</div>'+
                            '<div class="button">fin</div>'+
                        '</div>'+
                        '</div>';
                    document.getElementsByClassName("column-"+column)[0].appendChild(item);
                    i++;
                }
                
            }

            init();
})();
