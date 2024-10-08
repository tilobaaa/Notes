# Notes 

# Description: 
The Notes web app is created with React JS. It comes with two default notes and allows users to add, delete, pin, search, and edit notes. React hooks such as useState, useEffect, useReducer, and useContext were used to build this application.

# Table of Contents:
-	Installation
-	Usage
-	Features
-	How It Works
-	Contributing
-	License
-	Installation

# Clone the repo
git clone https://github.com/tilobaaa/Notes.git

# Install dependencies:
npm install

# Start the application:
Copy code
npm start

# Usage
Once the project is running, you can access the application at http://localhost:3000

# Features:
Add Notes: Create new notes by entering text and clicking "Add".
Delete Notes: Remove unwanted notes by clicking the delete icon.
Pin Notes: Pin important notes to the top of the list for easy access.
Search Notes: Filter your notes in real-time using the search bar.
Edit Notes: Update your existing notes by clicking the edit icon.

# Login/Signup
Email Validation: The login/signup feature requires the email to contain '@' and end with '.com' for proper validation.
Password Validation: Passwords must be greater than 8 characters to be accepted during login/signup.
Authentication: After entering a valid email and password, users can log in to access their notes.
Error Handling: If the email format is invalid or the password is too short, the user will receive an error message and be prompted to try again.

# How It Works
The application initializes with two default notes.
Notes are managed using React hooks (useState for state management, useEffect for side effects, useReducer for more complex state logic, and useContext for global state).
To add a note, click the add button at the right bottom of the screen and add some title and content.
When a note is pinned, it is moved to the top of the notes list.
The search functionality allows users to quickly filter through notes based on their title.
Editing functionality enables users to modify the text of an existing note by clicking the "Edit" button.

# Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request, especially in the area of improving the CSS.
 
 
 
