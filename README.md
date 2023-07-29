# Expense Tracker App with React

This is a simple expense tracker app built with React that allows you to track your expenses and sort them by date. The app uses `localStorage` to save your expenses, so you won't lose your data even if you close the browser.

## Features

- Add new expenses with a date, type of payment, amount, and description.
- Sort expenses by date in ascending order.
- Persistent data storage using `localStorage`.

## Usage

1. When the app loads, you will see a list of your expenses (if any) sorted by date in ascending order.

2. To add a new expense, click on the "Add a new expense" button. Fill in the date, type of payment, amount, and description of the expense in the form that appears, and then click "Add a new expense"

3. Your new expense will be added to the list and sorted automatically based on the date.

4. To clear all data in all expenses, click on the "Clear All" button next to the "Add a new expense" button.

5. Your expenses will be saved in the browser's `localStorage`, so you can close the app and come back later to see your data still intact.

![My Image](README.jpg)
## Installation

To run the Expense Tracker app locally on your machine, follow these steps:

1. Clone this repository to your local machine using:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd expense-tracker-app
   ```

3. Install the required dependencies using npm:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to access the Expense Tracker app.

## Dependencies

The Expense Tracker app uses the following external dependencies:

- React: A JavaScript library for building user interfaces.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---