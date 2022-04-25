import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:BMvYyq6hl9IMj6Z8@nestjs-mongo.kleiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
