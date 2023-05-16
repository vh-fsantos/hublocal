import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { Company } from './entities/company.entity';
import { CompanyController } from './controllers/company.controller';
import { CompanyService } from './services/company.service';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { PlaceController } from './controllers/place.controller';
import { PlaceService } from './services/place.service';
import { Place } from './entities/place.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'EU141200',
      database: 'hublocal_database',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Company, Place]),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }), 
    JwtModule.register({
      privateKey: 'secretKey',
      signOptions: { expiresIn: '60s' }
    })
  ],
  controllers: [UserController, CompanyController, PlaceController, AuthController],
  providers: [UserService, CompanyService, PlaceService, AuthService, JwtStrategy],
})
export class AppModule {}