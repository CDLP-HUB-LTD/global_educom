# Project Documentation: Global Educom

### Table of Contents

Introduction

Installation

Usage

User Registration and Login

Admin Registration and Login

Resource Creation

Dependencies

Contributing

License

## Introduction

Global Educom is a project aimed at providing a platform for user and admin authentication, along with the ability to create educational resource materials.

## Installation

To install the project, follow these steps:


Clone the repository:

bash
Copy code
git clone https://github.com/oduyemi/global_educom.git

## Install dependencies:

bash
Copy code
npm install
Configure the database:

## Set up your database and update the configuration in config.js.
Start the server:

bash
Copy code
npm start

## Usage

### User Registration and Login

To register a new user, make a POST request to /docs/register with the required user details.

To log in as a user, make a POST request to /docs/login with the user's email and password.

Admin Registration and Login

To register a new admin, make a POST request to /docs/admin/register with the required admin details.

To log in as an admin, make a POST request to /docs/admin/login with the admin's email and password.

## Resource Creation

To create a new resource material, make a POST request to /docs/resources/resource with the required resource details.

## Dependencies

Express

Crypto

Validator

Swagger

## Contributing

Fork the repository.

Create a new branch for your feature: git checkout -b feature-name.

Commit your changes: git commit -m 'Add new feature'.

Push to the branch: git push origin feature-name.

Submit a pull request.

## License

This project is licensed under the MIT License.
