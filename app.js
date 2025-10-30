// Part 1: SET UP
var express = require('express');   // We are using the express library for the web server
var app     = express();            // We need to instantiate an express object to interact with the server in our code
app.use(express.json())                // these 3 lines are used to handle json data 
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

PORT        = 3001;                 // Set a port number at the top so it's easy to change in the future

// Database
var db = require('./database/db-connector')

// set up handlebars templating engine 
const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');     // Import express-handlebars
app.engine('.hbs', engine({extname: ".hbs"}));  // Create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs');                 // Tell express to use the handlebars engine whenever it encounters a *.hbs file.

// Part 2: ROUTES
// app.js

app.get('/', function(req, res)
    {  
        let query1 = "SELECT * FROM Students;";               // Define our query

        db.pool.query(query1, function(error, rows, fields){    // Execute the query

            res.render('index', {data: rows});                  // Render the index.hbs file, and also send the renderer
        })                                                      // an object where 'data' is equal to the 'rows' we
    });                                                         // received back from the query

app.post('/add-student-ajax', function(req, res) 
{
    // Capture the incoming data and parse it back to a JS object
    let data = req.body;

    // Capture NULL values (numbers)
    let isVegan = parseInt(data.isVegan);
    if (isNaN(isVegan))
    {
        isVegan = 'NULL'
    }

    let isVegetarian = parseInt(data.isVegetarian);
    if (isNaN(isVegetarian))
    {
        isVegetarian = 'NULL'
    }

    let isDairyFree = parseInt(data.isDairyFree);
    if (isNaN(isDairyFree))
    {
        isDairyFree = 'NULL'
    }

    let isGlutenFree = parseInt(data.isGlutenFree);
    if (isNaN(isGlutenFree))
    {
        isGlutenFree = 'NULL'
    }

    let isKosher = parseInt(data.isKosher);
    if (isNaN(isKosher))
    {
        isKosher = 'NULL'
    }

    let isHalal = parseInt(data.isHalal);
    if (isNaN(isHalal))
    {
        isHalal = 'NULL'
    }

    // Create the query and run it on the database
    query1 = `INSERT INTO Students (firstName, lastName, student_userName, student_password, student_email, isVegan, isVegetarian, isDairyFree, isGlutenFree, isKosher, isHalal) VALUES ('${data.firstName}', '${data.lastName}', '${data.student_userName}', '${data.student_password}', '${data.student_email}', ${isVegan}, ${isVegetarian}, ${isDairyFree}, ${isGlutenFree}, ${isKosher}, ${isHalal})`;
    db.pool.query(query1, function(error, rows, fields){

        // Check to see if there was an error
        if (error) {

            // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
            console.log(error)
            res.sendStatus(400);
        }
        else
        {
            // If there was no error, perform a SELECT * on bsg_people
            query2 = `SELECT * FROM Students;`;
            db.pool.query(query2, function(error, rows, fields){

                // If there was an error on the second query, send a 400
                if (error) {
                    
                    // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
                    console.log(error);
                    res.sendStatus(400);
                }
                // If all went well, send the results of the query back.
                else
                {
                    res.send(rows);
                }
            })
        }
    })
});

app.delete('/delete-student-ajax/', function(req,res,next){
  let data = req.body;
  let studentID = parseInt(data.studentID);
  let deleteStudent= `DELETE FROM Students WHERE studentID = ?`;

        db.pool.query(deleteStudent, [studentID], function(error, rows, fields){
            if (error) {

            // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
            console.log(error);
            res.sendStatus(400);
            } else {
                res.sendStatus(204);
            }
        })
});

// Part 3: LISTENER
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});