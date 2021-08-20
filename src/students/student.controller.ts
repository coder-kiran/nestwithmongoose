import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateStudentDTO } from './dto/create-student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly studentSvc: StudentService) {}

    @Post()
    async addStudent(@Res() res,@Body() createStudentDTO:CreateStudentDTO){
        const addedStudent = await this.studentSvc.addStudent(createStudentDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Student added',
            student: addedStudent,
        })
    }
}
