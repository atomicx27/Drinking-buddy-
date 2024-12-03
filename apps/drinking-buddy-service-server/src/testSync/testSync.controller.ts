import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestSyncService } from "./testSync.service";
import { TestSyncControllerBase } from "./base/testSync.controller.base";

@swagger.ApiTags("testSyncs")
@common.Controller("testSyncs")
export class TestSyncController extends TestSyncControllerBase {
  constructor(
    protected readonly service: TestSyncService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
