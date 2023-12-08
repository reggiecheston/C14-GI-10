# Node.js (Week 2)

## EASY

Work through the learnyounode workshop lessons and screenshot your completed exercises 1-5. Information available at https://nodeschool.io/ and https://github.com/workshopper/learnyounode

## MEDIUM

Create a node application that will read all of the planets in the solar system from a text file and print them to the console.
Text file: mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune, pluto (I still believe in you pluto)

## HARD

Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.
Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with all data on the employees.
If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message stating that the employee was not found.
GET::myendpointname.com/employees = Json with information from all 10 employees.
GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.
