import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDTO } from './dto/create-student.dto';
import { Student } from './interfaces/student.interface';

@Injectable()
export class StudentService {

    constructor(@InjectModel('Student') private readonly studentModel: Model<Student>){}


    async addStudent(createStudentDTO: CreateStudentDTO): Promise<Student> {
        const addedStudent =  new this.studentModel(createStudentDTO);
        return addedStudent.save();
    }
}

