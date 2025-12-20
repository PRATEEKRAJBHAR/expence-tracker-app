
let loggedInUsername=localStorage.getItem("logged_in_username");
let loggedInUserpassword=localStorage.getItem("logged_in_password")
// console.log(loggedInUserpassword,"ye vatan tere liye");
if(loggedInUsername==loggedInUserpassword){
// let loggedinuser=localStorage.getItem("logged_in_username")
// if(loggedinuser){

    function filterdate() {
        let expense_date = document.getElementById("expense-date").value;
        let allExpenses = JSON.parse(localStorage.getItem("savedExpenses")) || [];
    
        let formattedFilterDate = expense_date.split("-").reverse().join("-");
        // Filter expenses based on the selected date
        console.log(formattedFilterDate,"hhgjfh");
        let filteredExpenses = allExpenses.filter(expense => expense.date == formattedFilterDate);
        // console.log(expense_date,"ram ram");
        if (filteredExpenses.length > 0) {
            // Store only the filtered expenses
            localStorage.setItem("savedExpenses", JSON.stringify(filteredExpenses));
            displaydate();
        } else {
            alert("No expenses found for this date.");
        }
    }
    
    function displaydate() {
        let storedExpenses = JSON.parse(localStorage.getItem("savedExpenses")) || [];
        let expenseDate = document.getElementById("tablebody");
        expenseDate.innerHTML = ""; // Clear previous data
    
        storedExpenses.forEach((expense, index) => {
            
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${expense.expense_name}</td>
                <td>${expense.expense_quantity}</td>
                <td>${expense.expense_rate}</td>
                <td>${expense.amount}</td>
                <td>${expense.date}</td>
            `;
            expenseDate.appendChild(row);
        });
    
        displayTotalAmount(); // Update total amount
    }
    
    function displayTotalAmount() {
        let storedExpenses = JSON.parse(localStorage.getItem("savedExpenses")) || [];
        let totalAmount = storedExpenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
    
        document.getElementById("total-amount").textContent = `Total Amount: ${totalAmount}`;
    }
    
}else{
    window.location.href="login.html"
}