import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TestSyncModuleBase } from "./base/testSync.module.base";
import { TestSyncService } from "./testSync.service";
import { TestSyncController } from "./testSync.controller";
import { TestSyncResolver } from "./testSync.resolver";

@Module({
  imports: [TestSyncModuleBase, forwardRef(() => AuthModule)],
  controllers: [TestSyncController],
  providers: [TestSyncService, TestSyncResolver],
  exports: [TestSyncService],
})
export class TestSyncModule {}
