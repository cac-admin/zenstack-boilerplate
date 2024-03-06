/* eslint-disable */
import {
    unsetMarker,
    type AnyRouter,
    type AnyRootConfig,
    type CreateRouterInner,
    type Procedure,
    type ProcedureBuilder,
    type ProcedureParams,
    type ProcedureRouterRecord,
    type ProcedureType,
} from '@trpc/server';
import { type PrismaClient } from '@prisma/client';
import createUserRouter from './User.router';
import createLearningRouter from './Learning.router';
import createRoleRouter from './Role.router';
import createPermissionRouter from './Permission.router';
import createCodeRunRouter from './CodeRun.router';
import createSubjectRouter from './Subject.router';
import createLessonRouter from './Lesson.router';
import createAccountRouter from './Account.router';
import createSessionRouter from './Session.router';
import createVerificationTokenRouter from './VerificationToken.router';

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <ProcRouterRecord extends ProcedureRouterRecord>(
    procedures: ProcRouterRecord,
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        learning: createLearningRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        permission: createPermissionRouter(router, procedure),
        codeRun: createCodeRunRouter(router, procedure),
        subject: createSubjectRouter(router, procedure),
        lesson: createLessonRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        verificationToken: createVerificationTokenRouter(router, procedure),
    });
}
