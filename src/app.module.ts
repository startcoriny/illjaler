import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColumnModule } from './column/column.module';
import { BoardModule } from './board/board.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ColumnModule, BoardModule, CommentModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
