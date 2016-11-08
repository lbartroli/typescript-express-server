
import * as express from 'express';

import { StudentsModel } from '../../model';
import { IStudent } from '../../model/interfaces';

let router = express.Router();

router.get('/students', (req, res, next) => {
    StudentsModel.getAll((err, students: IStudent[]) => {
        console.log('STUDENTS:');
        students.map(student => console.log(`${student.lastName}, ${student.firstName}`));
		if(err) return console.log(`Error: ${err}`);
        res.render('students/index', { 
            title: 'TypeScript - STUDENTS',
            students: students
        });
	});
});

router.post('/students', (req, res, next) => {
    let student: IStudent = {
        firstName: 'Juan',
        lastName: 'Gonzalez',
        password: 'admin',
        email: 'juangonzalez@gmail.com',
	    genre: 'masculino',
	    birthdate: new Date(),
	    active: true,
	    createdAt: new Date()
    }
    StudentsModel.add(student, (err) => {
        if(!err) res.send('JOYA');
    });
});

export default router;