# Angular CRUD Application

This is a CRUD application developed using Angular.

## Features

* Create, Read, Update, and Delete (CRUD) operations on user data.
* Fetches data from a JSON file using HttpClient.
* Displays user data in a table with pagination (10 items per page).
* Uses Angular Material for pagination and form elements.
* User form with validation for first name, last name, email, and description.
* Tags can be added using chips, a comma-separated input field, or a multi-select.
* Confirmation modal for deleting users.

## Getting Started

1. Clone the repository:

```bash
git clone [URL]
```

2. Install dependencies:

```bash

npm install
```

3.Start the development server:

```bash

ng serve
```

## Usage
Open http://localhost:4200 in your web browser.
The application will display a list of users.
Click the "Create User" button to create a new user.
Fill out the form and click "Save" to create the user.
You can edit or delete existing users using the actions column in the table.

## Technologies Used
Angular
HttpClient
Angular Material (for pagination and form elements)
Angular Reactive Forms

## License

This project is licensed under the MIT License.
