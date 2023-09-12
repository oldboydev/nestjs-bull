import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    BullModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        connection: {
          host: config.get('REDIS_HOST'),
          port: config.get('REDIS_PORT'),
          db: config.get('REDIS_DB'),
        },
      }),
      inject: [ConfigService],
    }),
    BullModule.registerQueue({
      name: 'singleIntance',
    }),
  ],
})
export class ScheduleJobsModule {}
