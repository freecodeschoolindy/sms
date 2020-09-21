# Student Management System - Frontend

[![Build Status](https://github.com/freecodeschoolindy/sms/workflows/Build%20Status/badge.svg)](https://github.com/freecodeschoolindy/sms/actions?query=workflow%3A%22Build+Status%22+branch%3Amaster)

## Running locally

1. Install Node and npm
1. npm install
1. npm start

Run `npm run validate` to see if everything passes.


```
Register
  Create an account (Required fields)
    * Github Username
    * E-Mail Adress
    * "Pick one:" Dropdown
      * I was previously a student
      * I am an existing student
      * I want to be on the wait list to become a student
      * Other
    * First Name (Richard)
    * Last Name (Sanchez)
    * Preferred Name (Rick) (Optional)

Login
  Students and Organizers/Admin accounts login using GitHub OAUTH

Public Profile: Visible to others logged in, maybe to those not logged in?
  First Name
  Last Name
  Preferred Name
  GitHub Username
  Codepen Username
  Certificates/Badges

Private Profile: Visible to only the user and organizers/admins
  FreeCodeCamp.org progress page url: freecodecamp.org/codecafecentral
  Email
  Discord Name
  Phone
  Attendenance (not editable by students)
  List of labs:
    Link to the lab starter
    input field for a link to their completed version

User listing page:
  Public: Organizers, students
  Admin only: Waitlist

Admin Dashboard
  Student Progress/Outcomes
    Grouped by enrollment period (cohort)
      Show all students in a table to track progress/outcomes
      Be able to edit any part of the table
      Similar to: https://docs.google.com/spreadsheets/d/1M2rAQSHNFqZlhAV0i1fKfVLBpx4CqRMUzowoGWS_KKQ/edit#gid=0

Need a legal document(s) created for Privacy/TOS/Legal stuff.
```
