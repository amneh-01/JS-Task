# JS-Task

Task-1 ....... 20/9

1. User Info & Greeting:** Prompt for `Name`, `Age`, and `Gender` $\rightarrow$ Alert personalized greeting (`Mr.`, `Ms.`, or default).
2. Age Check:** Verify age $\rightarrow$ If $< 16$, alert `"You are not eligible to place an order"` and stop.
3. Menu Selection:** Prompt for item (`Burger`, `Shawarma`, `Zinger`) $\rightarrow$ Set `isAvailable` boolean flag (`true`/`false`).
4. Status Verification:** Set order status using logical operators (`&&`, `||`, `!`):
Confirmed:** Age $\ge 18$ **AND** valid item.
Requires Verification:** Age $< 18$ **OR** invalid item.
5. Output:** Log details in `console.log()` and print final summary on page via `document.write()` *(Name, Age, Gender, Order, Status)*.

## 🛠️ Required JS Concepts
* Variables (`let`, `const`)
* User Input & Output (`prompt()`, `alert()`, `console.log()`, `document.write()`)
* Conditionals (`if` / `else if` / `else`)
* Comparison & Logical Operators (`&&`, `||`, `!`)

-----------------------------------------------------------------------------------------------------------------------------------------------------

Task-2 ...... 22/9

1. Menu Data Setup**
  Create a `menu` array with at least 5 food objects.
  Properties per object: `name`, `price`, `category`, `available`.

 2. Display Menu (`showMenu()`)**
    Use a `for` loop to list all items.
    Use `continue` to skip unavailable items (`available === false`).

 3. Order Selection & Validation Loop**
     Prompt user for item name using a `while` loop.
     Keep prompting until a valid, available food item is selected.
     Use `break` once a valid match is found.

  4. Object Property Iteration**
     Use a `for...in` loop to iterate through and display all properties of the selected food object.

  5. Code Structure & Final Output**
     Organize code using clear, reusable functions.
     Render the final summary on screen using `document.write()`.

   6. Bonus (Calculations)**
      Prompt for item quantity and calculate total cost: `totalPrice = price * quantity`.

---------------------------------------------------------------------------------------------------------------------------------------------------


Task-3 ....... 23/9

.Customer Name
Add an input for the customer's name.
2.Order
Add a select menu with:
Burger
Shawarma
Zinger
3.Submit Button
Add a Submit button.
When the user clicks the button, display:
4.Hello [Name]! Your order is [Order].
5.DOM Manipulation
Use all of the following:
getElementById()
getElementsByTagName()
getElementsByClassName()
querySelector()
1.Events
Use:
onclick →
 display the order.
onmouseover →
 change the button color.
onmouseout →
 return the button to its original color.
1.Styling
Add simple CSS to make the page look clean.
