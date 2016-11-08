
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