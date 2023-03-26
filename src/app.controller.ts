import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('local'))
  @Post()
  getHello(@Request() req): string {
    return req.user;
  }

  @Get()
  getHello2(): string {
    return this.appService.getHello();
  }
}
