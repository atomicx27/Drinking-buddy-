/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { TestSync } from "./TestSync";
import { TestSyncCountArgs } from "./TestSyncCountArgs";
import { TestSyncFindManyArgs } from "./TestSyncFindManyArgs";
import { TestSyncFindUniqueArgs } from "./TestSyncFindUniqueArgs";
import { CreateTestSyncArgs } from "./CreateTestSyncArgs";
import { UpdateTestSyncArgs } from "./UpdateTestSyncArgs";
import { DeleteTestSyncArgs } from "./DeleteTestSyncArgs";
import { TestSyncService } from "../testSync.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TestSync)
export class TestSyncResolverBase {
  constructor(
    protected readonly service: TestSyncService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TestSync",
    action: "read",
    possession: "any",
  })
  async _testSyncsMeta(
    @graphql.Args() args: TestSyncCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TestSync])
  @nestAccessControl.UseRoles({
    resource: "TestSync",
    action: "read",
    possession: "any",
  })
  async testSyncs(
    @graphql.Args() args: TestSyncFindManyArgs
  ): Promise<TestSync[]> {
    return this.service.testSyncs(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TestSync, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TestSync",
    action: "read",
    possession: "own",
  })
  async testSync(
    @graphql.Args() args: TestSyncFindUniqueArgs
  ): Promise<TestSync | null> {
    const result = await this.service.testSync(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TestSync)
  @nestAccessControl.UseRoles({
    resource: "TestSync",
    action: "create",
    possession: "any",
  })
  async createTestSync(
    @graphql.Args() args: CreateTestSyncArgs
  ): Promise<TestSync> {
    return await this.service.createTestSync({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TestSync)
  @nestAccessControl.UseRoles({
    resource: "TestSync",
    action: "update",
    possession: "any",
  })
  async updateTestSync(
    @graphql.Args() args: UpdateTestSyncArgs
  ): Promise<TestSync | null> {
    try {
      return await this.service.updateTestSync({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TestSync)
  @nestAccessControl.UseRoles({
    resource: "TestSync",
    action: "delete",
    possession: "any",
  })
  async deleteTestSync(
    @graphql.Args() args: DeleteTestSyncArgs
  ): Promise<TestSync | null> {
    try {
      return await this.service.deleteTestSync(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
