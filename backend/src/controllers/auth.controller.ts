import { Controller, Request, Post, Response, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Request() req, @Response() res) {
    let user = await this.authService.validateUser(req.body.email, req.body.password);

    if (!user)
      return res.status(401).json({ message: 'Unauthorized' });

    let token = await this.authService.login(user);
    return res.status(200).json(token);
  }
}