import { Controller, Get, Post , Body, Put} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('details')
  getHello(): string {
    return this.appService.getHello();
  }
  


  
}
