## Teams List Component

This is a React component that displays two boxes side by side. The left box contains a list of all employees available in the company along with their age and an ADD button. The right box displays the list of employees added to the team by pressing the ADD button, along with a REMOVE button for each team member and the average age of all team members.

### Features

- The Team Members box is empty initially.
- The ADD button adds the employee to the Team box and disables the button in the Employee's List.
- The REMOVE button in the Teams List removes the employee from the Team and enables the button in the Employee’s List.
- The average age of all team members is calculated and displayed.
- SORT BY AGE button sorts the team members in ascending order of their age.

### Installation

To run this component locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/sriram1224/Teams-list.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Teams-list
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

### Usage

- Click the ADD button next to an employee in the Employee's List to add them to the Team.
- Click the REMOVE button next to a team member in the Team List to remove them from the Team.
- Click SORT BY AGE button to sort the team members by their age in ascending order.

### Preview

You can view the component in action [here](https://github.com/sriram1224/Teams-list).



### Technology Used

This component uses React and utilizes the useReducer hook for managing state.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
