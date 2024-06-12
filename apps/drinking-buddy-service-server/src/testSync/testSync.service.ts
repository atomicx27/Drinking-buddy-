import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestSyncServiceBase } from "./base/testSync.service.base";

@Injectable()
export class TestSyncService extends TestSyncServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
