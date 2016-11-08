
import { IStudent } from '../interfaces';
import * as mongoose from 'mongoose';

export class StudentsModel {
	// SINGLETON
	private static instance: StudentsModel;
	static get Instance() {
		if (this.instance === null || this.instance === undefined) {
			this.instance = new StudentsModel();
		}
		return this.instance;
	}
	// END SINGLETON

	private studentSchema: mongoose.Schema;
	private model: mongoose.Model<any>;

	constructor() {
		this.studentSchema = new mongoose.Schema({
			email: { type: String, lowercase: true, trim: true, required: true },
			password: String,
			firstName: { type: String, lowercase: true, trim: true },
			lastName: { type: String, lowercase: true, trim: true },
			genre: { type: String, lowercase: true, trim: true, enum: ['femenino', 'masculino'] },
			birthdate: Date,
			avatar: { type: String, default: '/img/old_user-default-picture.png' },
			active: { type: Boolean, default: true },
			createdAt: { type: Date, default: Date.now },
			removeAt: Date
		});
		this.model = mongoose.model('Student', this.studentSchema);
	} 

	static getAll(cb) {
		this.Instance.model.find().exec(cb);
	}

	
	static getById(id, cb) {
		this.Instance.model.findById(id).exec(cb);
	}

	static add(student, cb) {
		var student = new this.Instance.model(student);  
		student.save(cb);
	}
}

// export const studentsModel = StudentsModel;


// let studentSchema = new Schema({
// 	email: { type: String, lowercase: true, trim: true, required: true },
// 	password: String,
// 	firstName: { type: String, lowercase: true, trim: true },
// 	lastName: { type: String, lowercase: true, trim: true },
// 	genre: { type: String, lowercase: true, trim: true, enum: ['femenino', 'masculino'] },
// 	birthdate: Date,
// 	avatar: { type: String, default: '/img/old_user-default-picture.png' },
// 	active: { type: Boolean, default: true },
// 	createdAt: { type: Date, default: Date.now },
// 	removeAt: Date
// });

// studentSchema.statics = {
// 	getAll: getAll,
// 	getById: getById,
// 	update: update,
// }

// function getAll(cb) {
// 	Students.find().exec(cb);
// }

// function getById(id, cb) {
// 	Students.findById(id).exec(cb);
// }

// function update(student: IStudent, cb) {
// 	Students.findById(student._id)
// }

// export const Students = mongoose.model('Student', studentSchema); 

// userSchema.methods = {
// 	validPassword: function(password, fn) {
// 		bcrypt.compare(password, this.password, function(err, res) {
// 		    if (err) {
// 		    	return fn(err);
// 		    }

// 		    return fn(null, res);
// 		});
// 	}
// };

// userSchema.statics = {
// 	getAll: getAll,
// 	getById: getById,
// 	removeById: removeById,
// 	add: add,
//   	update: update,
//   	encrypt: encrypt
// };

// function getAll(fn) {
// 	this.find().exec(fn);
// }

// function getById(uid, fn) {
// 	this.findById(uid).exec(fn);
// }

// function removeById(uid, fn) {
// 	this.findById(uid).exec(function(err, user) {
// 		if (err)
// 			return fn(err, null);

// 		user.active = false;
// 		return user.save(fn);
// 	});
// }

// function add(data, fn) {    
// 	var user = new User(data);  
// 	user.save(fn);
// }

// function update(uid, data, fn) {    
// 	this.findById(uid).exec(function(err, item) {
// 		if (err)
// 			return fn(err);

// 		//change each prop and then save(), ex: item.name = data.name
// 		item.save(fn);
// 	});
// }

// function encrypt(password, fn) {
// 	return bcrypt.hash(password, 10, function(err, hash) {
// 		if (err) {
// 			return fn(err);
// 		}

// 		return fn(null, hash);
// 	});
// }

// var User = mongoose.model('User', userSchema);