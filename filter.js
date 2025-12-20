
let loggedInUsername = localStorage.getItem("logged_in_username");
document.getElementById("usernames").textContent = `Hello ${loggedInUsername}`;

// let loggedInUserpassword=localStorage.getItem("logged_in_password")
// console.log(loggedInUsername, "ye vatan tere liye");
// if(loggedInUsername==loggedInUserpassword){
// if (loggedInUsername) {

//     console.log(loggedInUsername, "ye vatan tere liyeeeeeeeeeeeeeeeeeeeeee");







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



    // this is user details changes buttons
    document.addEventListener("DOMContentLoaded", function () {

        if(!loggedInUsername){
             window.location.href = "login.html"
        }
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




    document.addEventListener("DOMContentLoaded", () => {
        if(!loggedInUsername){
            window.location.href = "login.html"
       }
        displayStoredExpenses(); // Display all expenses;
    });

    // for user-name;

    let loginUsername = localStorage.getItem("logged_in_username");
    let left_spaces = "!<".repeat(1);
    let right_spaces = ">!".repeat(1);
    if (loginUsername) {

        document.getElementById("names").innerHTML = `Welcome  <span style="color: #55d6aa; font-weight: bold"> ${left_spaces} ${loginUsername} ${right_spaces}  </span> in Expense Tracker App`;
    }





    function filterdate() {
        let from = document.getElementById("from").value;
        let to = document.getElementById("to").value;
        // if(from==""||to==""){
        //     alert("plz select  both calender is mandatory")
        // }
        let loggedInUsername = localStorage.getItem("logged_in_username")

        // Get previous expenses from localStorage or create an empty array
        let savedExpenses = `expsense_calcu_${loggedInUsername}`
        let storedExpenses = JSON.parse(localStorage.getItem(savedExpenses)) || [];
        // console.log(storedExpenses,"mahakumbh");
        // Convert input dates to Date objects
        let formattedFrom = from.split("-").reverse().join("-");;
        let formattedTo = to.split("-").reverse().join("-");

        // Filter expenses that fall within the date range
        let filteredExpenses = storedExpenses.filter(expense => expense.date >= formattedFrom && expense.date <= formattedTo)
        // let filteredExpenses=storedExpenses.filter(expense=>{
        //     let task_date=new Date(expense.date);
        //     return task_date>=formattedFrom&&task_date<=formattedTo
        // })
        // console.log(filteredExpenses,"shree ram");
        // Convert stored date from "dd-mm-yyyy" to "YYYY-MM-DD"
        // let [day, month, year] = expense.date.split("-");
        // let expenseDate = new Date(`${year}-${month}-${day}`); 



        // Check if the expense date is within range
        // return expenseDate >= formattedFrom && expenseDate <= formattedTo;
        // );

        if (filteredExpenses.length > 0) {
            // Store and display only the filtered expenses
            // localStorage.setItem(`filterexpense_${loginUsername}`, JSON.stringify(filteredExpenses));
            displayFilteredExpenses(filteredExpenses);

        } else {
            alert("no added any task!")
        }
    }

    function displayFilteredExpenses(filteredExpenses) {
        let expenseTable = document.getElementById("tablebody");
       
        expenseTable.innerHTML = ""; // Clear previous data

        filteredExpenses.forEach((expense, index) => {
           
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${expense.expense_name}</td>
                <td>${expense.expense_quantity}</td>
                <td>${expense.expense_rate}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>${expense.date}</td>
            `;
            
            expenseTable.appendChild(row);
        });

        displayTotalAmount(filteredExpenses); // Update total amount
    }
    // bydefault display all expenses
    function displayStoredExpenses() {
        let loggedInUsername = localStorage.getItem("logged_in_username")
        let savedExpenses = `expsense_calcu_${loggedInUsername}`
        let storedExpenses = JSON.parse(localStorage.getItem(savedExpenses)) || [];
        // console.log(storedExpenses,"mahakal");
        displayFilteredExpenses(storedExpenses);
    }


    function displayTotalAmount(expenses) {
        let totalAmount = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
        document.getElementById("total-amount").textContent = `Total Amount(Rs.): ${totalAmount.toFixed(2)}`;
    }

// } else {
   
// }
