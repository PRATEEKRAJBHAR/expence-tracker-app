// let loggedInUsername=localStorage.getItem("logged_in_username");
// let loggedInUserpassword=localStorage.getItem("logged_in_password")
// // console.log(loggedInUserpassword,"ye vatan tere liye");
// if(loggedInUsername==loggedInUserpassword){
let loggedInUsername=localStorage.getItem("logged_in_username")
document.getElementById("usernames").textContent = `Hello ${loggedInUsername}`;

if(loggedInUsername){

// let unique_username=loggedInUsername.find(user=>)



    
    // this is user details changes buttons

    document.addEventListener("DOMContentLoaded", function () {
        let container2 = document.querySelector(".container2");
        let profileButton = document.getElementById("logos");
    
    
        container2.style.display = "none";
    
    
        function toggleContainer() {
            if (container2.style.display === "none" || container2.style.display === "") {
                container2.style.display = "block";
            } else {
                container2.style.display = "none";
            }
        }
    
        // Click event for the profile button to toggle container2
        profileButton.addEventListener("click", function (event) {
            event.stopPropagation(); 
            toggleContainer();
        });
    
        // // Click outside to close container2
        // document.addEventListener("click", function (event) {
        //     if (!container2.contains(event.target) && event.target !== profileButton) {
        //         container2.style.display = "none";
        //     }
        // });
    
        // // Prevent clicks inside the container from closing it
        // container2.addEventListener("click", function (event) {
        //     event.stopPropagation(); // Stops event from bubbling up to document
        // });
    });





// clicked button then delete user name
    let logoutButton = document.getElementById("user-logout");

    if (logoutButton) {
            document.addEventListener("DOMContentLoaded", function () {
            logoutButton.addEventListener("click", function (event) {
                event.preventDefault(); // Stop the default navigation
                localStorage.removeItem("logged_in_username"); // Remove stored username
                alert("Logged out successfully!"); // Show confirmation
                setTimeout(() => {
                    window.location.href = "login.html"; // Redirect after short delay
                }, 500); // Delay to allow alert to show
            });
         
    });
    }
    



    function btn() {
  
        let expense_name = document.getElementById("expense-name");
        
        if (expense_name.value === "") {
            alert("Please enter the expense name");
            return;
        }
    
        let obj = {
            expense_name: expense_name.value
        };
    // console.log(obj,"ramji");
        let expenseUserKey=`expenses_for_${loggedInUsername}`;
        let data = JSON.parse(localStorage.getItem(expenseUserKey)) || [];
    
        data.push(obj);
        // console.log(data,"ram ram");
        // console.log(obj,"shree ram");
        localStorage.setItem(expenseUserKey, JSON.stringify(data));
    
        expense_name.value = "";
        
        displayTasks();
        populateExpenseSelector();
    }
    
    function displayTasks() {
        let taskTableBody = document.getElementById("tablebody");
        taskTableBody.innerHTML = "";
    
        let expenseUserKey=`expenses_for_${loggedInUsername}`;
        let tasks = JSON.parse(localStorage.getItem(expenseUserKey)) || [];
    // console.log(tasks,"ramji");
        tasks.forEach((task, index) => {
            // Create a task item div
            // const taskItem = document.createElement("div");
            let row=document.createElement("tr")
            row.innerHTML=`
             <td>${index + 1}</td>
              <td class="expense-name">${task.expense_name}</td>
            `// Create a single column for both icons
            let actionCell = document.createElement("td");

// Create a container to hold both icons
let iconContainer = document.createElement("div");
                // let actionCell = document.createElement("td");

                // Add trash (delete) icon
                const deleteCell=document.createElement("td");
                const deleteIcon = document.createElement("i");
                deleteIcon.className = "fa-solid fa-trash-can";
                // deleteIcon.style.marginRight = "10px";
                deleteIcon.style.cursor = "pointer";
    
                deleteIcon.addEventListener("click", () => {
                    // Remove the task from the user's task list
                    // console.log(tasks,"dsfd");
                    tasks.splice(index, 1);
    
                    // Save the updated tasks back to local storage
                    localStorage.setItem(expenseUserKey, JSON.stringify(tasks));
    
                    // Refresh the task list
                    displayTasks();
    
                    alert("Task deleted successfully!");
                });
    
                // Add edit (pencil) icon
                let editCell=document.createElement("td")
                const editIcon = document.createElement("i");
                editIcon.className = "fa-solid fa-pen-to-square";
                editIcon.style.cursor = "pointer";
                editIcon.style.position = "relative";
                editIcon.style.left = "20px";
                // Add event listener to edit the task
                editIcon.addEventListener("click", () => {
                    const updatedTask = prompt("Edit your task:", task.expense_name);
    
                    if (updatedTask && updatedTask.trim() !== "") {
                        tasks[index].expense_name = updatedTask.trim();
    
                        // Save the updated tasks back to local storage
                        localStorage.setItem(expenseUserKey, JSON.stringify(tasks));
    
    
                        // Refresh the task list
                        displayTasks();
    
                        alert("Task updated successfully!");
                    } else {
                        alert("Task update canceled or invalid.");
                    }
                });
    
                iconContainer.appendChild(deleteIcon);
                iconContainer.appendChild(editIcon);
                
                // Append the container to the single column
                actionCell.appendChild(iconContainer);
                
                // Append the action cell to the row
                row.appendChild(actionCell);
                
                // Append the row to the table
                taskTableBody.appendChild(row);
        });
    }
    
    // // Call displayTasks() when the page loads to show existing tasks
    window.onload = displayTasks;
}else{
    window.location.href="login.html"
}
// console.log(loggedInUsername,"dsf");



