import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SomeDetailsDto } from './some-details.dto';
import { Student, StudentDocument } from './student.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Student.name) private readonly studentModel: Model<StudentDocument>
  ){}

  getHello(): string {
    return 'Hello World!';
  }

   async create( somedetailsdto: SomeDetailsDto): Promise<Student> {
     const createdStudent = new this.studentModel(somedetailsdto);
     return createdStudent.save();
   }
}
