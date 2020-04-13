import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {

  private readonly FAQ = JSON.parse(readFileSync(join(__dirname, '..', 'src', 'assets', 'data', 'faq.json')).toString());
  private readonly TNC = JSON.parse(readFileSync(join(__dirname, '..', 'src', 'assets', 'data', 'tnc.json')).toString());
  private readonly LINKS = JSON.parse(readFileSync(join(__dirname, '..', 'src', 'assets', 'data', 'links.json')).toString());

  constructor(private readonly appService: AppService) { }


  @Get('faq')
  faq() {
    return this.FAQ;
  }

  @Get('tnc')
  tnc() {
    return this.TNC;
  }

  @Get('links')
  links() {
    return this.LINKS;
  }
}
