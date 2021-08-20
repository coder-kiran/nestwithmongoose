import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudDoc = Studsc & Document;

@Schema()
export class Studsc {
  @Prop()
  fname: string;

  @Prop()
  title: string;

}

export const StudentSchema = SchemaFactory.createForClass(Studsc);