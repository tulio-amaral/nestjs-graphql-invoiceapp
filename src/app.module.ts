import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { CustomerResolver } from './customer/customer.resolver';
import { InvoiceModule } from './invoice/invoice.module';
import { InvoiceResolver } from './invoice/invoice.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'invoiceapp',
      entities: ['dist/**/*.model.js'],
      migrations: [path.resolve(__dirname, 'database', 'migrations', '*')],
      synchronize: false,
    }),
    CustomerModule,
    InvoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomerResolver, InvoiceResolver],
})
export class AppModule {}
