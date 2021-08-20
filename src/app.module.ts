import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { StudentModule } from './students/student.module';

@Module({
  imports: [StudentModule,MongooseModule.forRoot('mongodb://localhost:27017/test')

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// MongooseModule.forFeature([{ name: 'Student',schema: StudentSchema}])