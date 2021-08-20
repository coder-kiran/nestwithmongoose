import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {StudentSchema} from './students/schemas/student.schema'

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

  
}
