import { Controller, Get, Post , Body} from '@nestjs/common';
import { AppService } from './app.service';
import {SomeDetailsDto} from './some-details.dto'

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('details')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('signup')
  async putDetails(@Body() somedetailsdto: SomeDetailsDto) {
    await this.appService.create(somedetailsdto)
    // getting data here
  }
}
