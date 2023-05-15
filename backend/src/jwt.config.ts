import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: 
        [PassportModule, 
        JwtModule.register({
            secret: 'secretKey',
            signOptions: { expiresIn: '60s' },
        })],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService],
})
export class JwtConfigModule {}