// adds a task to the list
let addTask = function(){
            
            let list = document.getElementById('theList')
			//get the input value --------------------------------------------------------------------------------------------------------------
            let inputText = document.getElementById('inputText').value;
			//clear the input field-------------------------------------------------------------------------------------------------------------
            document.getElementById('inputText').value = ""
            
            let task = document.createElement('li');
            
			//create the checkbox---------------------------------------------------------------------------------------------------------------
            let checkbox = document.createElement("INPUT");
            checkbox.setAttribute("type", "checkbox");
            checkbox.addEventListener('change', function() {
            	if(this.checked){
                this.parentNode.style.color="#b2b2b2"
              	this.parentNode.style.textDecoration="line-through"
              }
              else{
              	this.parentNode.style.color="black";
              	this.parentNode.style.textDecoration="none"
              }
              
            })
            let removeTask = document.createElement('input');
            //create the remove button----------------------------------------------------------------------------------------------------------
            removeTask.setAttribute('type', 'button');
            removeTask.setAttribute("value", "-");
            removeTask.setAttribute("id", "removeButton");
            removeTask.addEventListener('click', function() {
                  task.parentNode.removeChild(task);
              }, false);
			//append the elements if the input value is not empty-------------------------------------------------------------------------------			  
            if(inputText.length>0){
              task.appendChild(checkbox)
              task.appendChild(document.createTextNode(inputText));
              task.appendChild(removeTask)
          
              list.appendChild(task);
            }
				}