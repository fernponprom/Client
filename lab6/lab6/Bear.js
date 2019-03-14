let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

app.use('/api', bodyParser.json(), router);
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let student = [{'id':0,'stId':'5735512089','name':'Ponprom','surname': 'Samanwong','Major':'CoE','GPA':3.33}
];

router.route('/student')
    .get((req, res) =>  {
        res.json(student)
    })

    .post( (req, res)=> {
        var students = {};
        students.id =  student.length++;
        students.stId = req.body.stId
        students.name = req.body.name
        students.surname = req.body.surname
        students.Major = req.body.Major
        students.GPA = req.body.GPA
        student.push(students);
        res.json( {message: 'students created!'} )
    })
    router.route('/student/:student_id')
    .get ( (req,res) => res.json(student[req.params.student_id]))  // get a bear
 
    .put ( (req,res) => {                               // Update a bear
        var id = req.params.student_id
        student[id].stId = req.body.stId
        student[id].name = req.body.name;   
        student[id].surname = req.body.surname;
        student[id].Major = req.body.Major;
        student[id].GPA = req.body.GPA;
        res.json({ message: 'Student updated!' + req.params.student_id});
    })
 
    .delete ( (req,res) => {                   // Delete a bear
        delete     student[req.params.student_id]
        res.json({ message: 'Student deleted: ' + req.params.student_id});
    })
 

app.use("*", (req,res) => res.status(404).send('404 Not found') );
app.listen(8000,  () => console.log("Server is running") );

