import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleJobsModule } from './scheduler-jobs/scheduler-jobs.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ScheduleJobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
