let loggedinuser=localStorage.getItem("logged_in_username")
// console.log(loggedinuser);
// let validusername = get_data.find(user => user.expense_name === expenseDropdown.value);
// let loggedInUsername = localStorage.getItem("logged_in_username");
// if(loggedInUsername){
document.getElementById("usernames").textContent = `Hello ${loggedinuser}`;
if(loggedinuser){



    
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






let save_btn=document.getElementById("save-btn");
save_btn.style.display="none"
function populateExpenseSelector() {
    let loggedInUsername=localStorage.getItem("logged_in_username")
    let expenseUserKey=`expenses_for_${loggedInUsername}`;
    let get_data = JSON.parse(localStorage.getItem(expenseUserKey)) || [];
// console.log(get_data,"jai shree ram");
    // let get_data = JSON.parse(localStorage.getItem("expense")) || [];
    let expenseDropdown = document.getElementById("expense-name");

    // Clear previous options but keep the default one
    expenseDropdown.innerHTML = '';
// console.log(expense,"dsf");
    get_data.forEach((a) => {  //here i am changed expense=a only
        // console.log(a,"dfds");
        let option = document.createElement("option");
        option.value = a.expense_name;
        option.textContent = a.expense_name;
        expenseDropdown.appendChild(option);
    });
}
// populateExpenseSelector()
// Populate dropdown when the page loads
window.onload = function () {
    populateExpenseSelector();
    loadStoredExpenseData();
};

// For amount calculation
let expense_quantity = document.getElementById("expense-quantity");
let expense_rate = document.getElementById("expense-rate");
let expense_date = document.getElementById("expense-date");

function calculation() {
    if (expense_quantity.value === "" || expense_rate.value === "" || expense_date.value === "") {
        alert("Please fill all the fields");
        return;
    }

    let expenseDropdown = document.getElementById("expense-name");
    let loggedInUsername=localStorage.getItem("logged_in_username")
    let expenseUserKey=`expenses_for_${loggedInUsername}`;
    let get_data = JSON.parse(localStorage.getItem(expenseUserKey)) || [];
    // console.log(get_data,"sdf");
    let validuser = get_data.find(user => user.expense_name === expenseDropdown.value);

    if (validuser) {
        let calculatedAmount = parseFloat(expense_quantity.value * expense_rate.value);
        
        let originalDate = expense_date.value; // YYYY-MM-DD
        // console.log(originalDate,"ddd");
        let formattedDate = originalDate.split("-").reverse().join("-");


        let newExpense = {
            expense_name: expenseDropdown.value,
            expense_quantity: expense_quantity.value,
            expense_rate: expense_rate.value,
            amount: calculatedAmount,
            date: formattedDate
        };

        // Get previous expenses from localStorage or create an empty array
        let savedExpenses=`expsense_calcu_${loggedInUsername}`
        let storedExpenses = JSON.parse(localStorage.getItem(savedExpenses)) || [];
console.log(storedExpenses,"ram ram");
        // Add new expense
        storedExpenses.push(newExpense);

        // Save updated list to localStorage
        localStorage.setItem(savedExpenses, JSON.stringify(storedExpenses));

        // Update UI
        displayStoredExpenses();
expense_quantity.value="";
expense_rate.value="";
expense_date.value="";

    }
}

// calculation()
// Load stored data on page reload
function loadStoredExpenseData() {
    displayStoredExpenses();
}

function displayStoredExpenses() {
    let loggedInUsername=localStorage.getItem("logged_in_username")
    let savedExpenses=`expsense_calcu_${loggedInUsername}`

    let storedExpenses = JSON.parse(localStorage.getItem(savedExpenses)) || [];
    let expenseList = document.getElementById("tablebody");
console.log(storedExpenses,"ramji");
    expenseList.innerHTML = "";
    storedExpenses.forEach((expense, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td class="expense-name">${expense.expense_name}</td>
            <td class="expense-quantity">${expense.expense_quantity}</td>
            <td class="expense-rate">${expense.expense_rate}</td>
            <td class="expense-amount">${expense.amount.toFixed(2)}</td>
            <td class="expense-date">${expense.date}</td>
        `;

        // Create a single column for both icons
        let actionCell = document.createElement("td");
        // actionCell.style.display = "flex";
        // actionCell.style.marginLeftLeft = "320px";

        // actionCell.style.gap = "10px"; // Adds 20px space between icons


        let deleteCell = document.createElement("td");
        let deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-trash-can";
        deleteIcon.style.cursor = "pointer";
        deleteIcon.style.position = "relative";
        // editIcon.style.border = "1px solid red";

        deleteIcon.style.right = "20px";

        deleteIcon.addEventListener("click", () => {
            storedExpenses.splice(index, 1);
            localStorage.setItem(savedExpenses, JSON.stringify(storedExpenses));
            displayStoredExpenses();
            alert("Expense deleted successfully!");
        });



        // edit buttons
        let editCell = document.createElement("td");
        const editIcon = document.createElement("i");
        editIcon.className = "fa-solid fa-pen-to-square";
        editIcon.style.cursor = "pointer";
        editIcon.style.position = "relative";
        // editIcon.style.border = "1px solid red";

        editIcon.style.left = "30px";


        editIcon.addEventListener("click", () => {
            // Find input fields
            let btns=document.getElementById("btn");
            btns.style.display="none";//add data button is hide
            save_btn.style.display="block"//after edits button click save btn in display
            let nameField = document.getElementById("expense-name");
            let quantityField = document.getElementById("expense-quantity");
            let rateField = document.getElementById("expense-rate");
            let dateField = document.getElementById("expense-date");

            // Set input field values
            nameField.value = expense.expense_name;
            quantityField.value = expense.expense_quantity;
            rateField.value = expense.expense_rate;
            let originalDate = expense.date; // YYYY-MM-DD
            // let formattedDate = originalDate.split("-").reverse().join("-");
            
            // dateField.value = expense.formattedDate;

            if (originalDate) {
                let [year, month, day] = originalDate.split("-");
                dateField.value = `${day}-${month}-${year}`; // Convert to DD-MM-YYYY
            }
            // Save edited data when user submits the form
            let saveButton = document.getElementById("save-btn");
            saveButton.onclick = function () {
                storedExpenses[index].expense_name = nameField.value;
                storedExpenses[index].expense_quantity = quantityField.value;
                storedExpenses[index].expense_rate = rateField.value;
                storedExpenses[index].amount = Number(quantityField.value) * Number(rateField.value);
                // let updatedDate = dateField.value.split("-").reverse().join("-"); // Convert DD-MM-YYYY back to YYYY-MM-DD
                // storedExpenses[index].date = updatedDate;
           
                let [day, month, year] = dateField.value.split("-");
                let updatedDate = `${year}-${month}-${day}`;
                storedExpenses[index].date = updatedDate;


                // localStorage.setItem(savedExpenses, JSON.stringify(storedExpenses));
                localStorage.setItem(savedExpenses, JSON.stringify(storedExpenses));
                // displayStoredExpenses();
                 // Update the displayed row in the table
                 row.querySelector(".expense-name").textContent = nameField.value;
                 row.querySelector(".expense-quantity").textContent = quantityField.value;
                 row.querySelector(".expense-rate").textContent = rateField.value;
                 row.querySelector(".expense-amount").textContent = Number(quantityField.value) * Number(rateField.value);
                 
                 row.querySelector(".expense-date").textContent =formattedDate;
                alert("Expense updated successfully!");
            };
        });

        // deleteCell.appendChild(deleteIcon);
        // row.appendChild(deleteCell);

        // editCell.appendChild(editIcon);
        // row.appendChild(editCell);

        // expenseList.appendChild(row);

        actionCell.appendChild(editIcon);
        actionCell.appendChild(deleteIcon);
        row.appendChild(actionCell);

        // Append row to the table
        expenseList.appendChild(row);
    });

    displayTotalAmount();
}



function displayTotalAmount() {
      let loggedInUsername=localStorage.getItem("logged_in_username")
    let savedExpenses=`expsense_calcu_${loggedInUsername}`
    let storedExpenses = JSON.parse(localStorage.getItem(savedExpenses)) || [];
    
    let totalAmount = 0;

    storedExpenses.forEach((expense) => {
        totalAmount += Number(expense.amount)
    });

    document.getElementById("total-amount").textContent = `Total Amount(Rs.): ${totalAmount.toFixed(2)}`;
}

}else{
    window.location.href="login.html"
}


