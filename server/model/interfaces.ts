
export interface IStudent {
	_id?: String;
	email: String,
	password: String,
	firstName: String,
	lastName: String,
	genre: String,
	birthdate: Date,
	avatar?: String,
	active: Boolean,
	createdAt: Date,
	removeAt?: Date
}