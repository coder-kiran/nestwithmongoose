import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student{

 @Prop()
 fname: string;

 @Prop()
 lname: string;

 @Prop()
 phoneno: number;

 @Prop()
 passwrd: string;

}
export const StudentSchema = SchemaFactory.createForClass(Student);