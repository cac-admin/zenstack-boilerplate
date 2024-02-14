/* eslint-disable */
const metadata = {
    fields: {
        user: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            name: {
                name: 'name',
                type: 'String',
                isOptional: true,
            },
            netid: {
                name: 'netid',
                type: 'String',
                isOptional: true,
            },
            student_number: {
                name: 'student_number',
                type: 'String',
                isOptional: true,
            },
            email: {
                name: 'email',
                type: 'String',
            },
            emailVerified: {
                name: 'emailVerified',
                type: 'DateTime',
                isOptional: true,
            },
            password: {
                name: 'password',
                type: 'String',
            },
            image: {
                name: 'image',
                type: 'String',
                isOptional: true,
            },
            accounts: {
                name: 'accounts',
                type: 'Account',
                isDataModel: true,
                isArray: true,
                backLink: 'user',
            },
            sessions: {
                name: 'sessions',
                type: 'Session',
                isDataModel: true,
                isArray: true,
                backLink: 'user',
            },
            codeRuns: {
                name: 'codeRuns',
                type: 'CodeRun',
                isDataModel: true,
                isArray: true,
                backLink: 'createdBy',
            },
            lessons: {
                name: 'lessons',
                type: 'Lesson',
                isDataModel: true,
                isArray: true,
                backLink: 'author',
            },
            roles: {
                name: 'roles',
                type: 'Role',
                isDataModel: true,
                isArray: true,
                backLink: 'users',
                isRelationOwner: true,
            },
        },
        role: {
            id: {
                name: 'id',
                type: 'Int',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
                isAutoIncrement: true,
            },
            name: {
                name: 'name',
                type: 'String',
            },
            permissions: {
                name: 'permissions',
                type: 'Permission',
                isDataModel: true,
                isArray: true,
                backLink: 'roles',
                isRelationOwner: true,
            },
            users: {
                name: 'users',
                type: 'User',
                isDataModel: true,
                isArray: true,
                backLink: 'roles',
                isRelationOwner: true,
            },
        },
        permission: {
            id: {
                name: 'id',
                type: 'Int',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
                isAutoIncrement: true,
            },
            name: {
                name: 'name',
                type: 'String',
            },
            roles: {
                name: 'roles',
                type: 'Role',
                isDataModel: true,
                isArray: true,
                backLink: 'permissions',
                isRelationOwner: true,
            },
        },
        codeRun: {
            id: {
                name: 'id',
                type: 'Int',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
                isAutoIncrement: true,
            },
            time: {
                name: 'time',
                type: 'BigInt',
            },
            createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                attributes: [{ name: '@default', args: [] }],
            },
            createdBy: {
                name: 'createdBy',
                type: 'User',
                isDataModel: true,
                backLink: 'codeRuns',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'createdById' },
            },
            createdById: {
                name: 'createdById',
                type: 'String',
                isForeignKey: true,
            },
        },
        subject: {
            name: {
                name: 'name',
                type: 'String',
                isId: true,
            },
            createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                attributes: [{ name: '@default', args: [] }],
            },
            lessons: {
                name: 'lessons',
                type: 'Lesson',
                isDataModel: true,
                isArray: true,
                backLink: 'subject',
            },
        },
        lesson: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            author: {
                name: 'author',
                type: 'User',
                isDataModel: true,
                isOptional: true,
                backLink: 'lessons',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'authorId' },
            },
            subject: {
                name: 'subject',
                type: 'Subject',
                isDataModel: true,
                backLink: 'lessons',
                isRelationOwner: true,
                foreignKeyMapping: { name: 'subName' },
            },
            subName: {
                name: 'subName',
                type: 'String',
                isForeignKey: true,
            },
            authorId: {
                name: 'authorId',
                type: 'String',
                isForeignKey: true,
            },
            content: {
                name: 'content',
                type: 'Bytes',
            },
        },
        account: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            userId: {
                name: 'userId',
                type: 'String',
                isForeignKey: true,
            },
            type: {
                name: 'type',
                type: 'String',
            },
            provider: {
                name: 'provider',
                type: 'String',
            },
            providerAccountId: {
                name: 'providerAccountId',
                type: 'String',
            },
            refresh_token: {
                name: 'refresh_token',
                type: 'String',
                isOptional: true,
            },
            access_token: {
                name: 'access_token',
                type: 'String',
                isOptional: true,
            },
            expires_at: {
                name: 'expires_at',
                type: 'Int',
                isOptional: true,
            },
            token_type: {
                name: 'token_type',
                type: 'String',
                isOptional: true,
            },
            scope: {
                name: 'scope',
                type: 'String',
                isOptional: true,
            },
            id_token: {
                name: 'id_token',
                type: 'String',
                isOptional: true,
            },
            session_state: {
                name: 'session_state',
                type: 'String',
                isOptional: true,
            },
            user: {
                name: 'user',
                type: 'User',
                isDataModel: true,
                backLink: 'accounts',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'userId' },
            },
        },
        session: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            sessionToken: {
                name: 'sessionToken',
                type: 'String',
            },
            userId: {
                name: 'userId',
                type: 'String',
                isForeignKey: true,
            },
            expires: {
                name: 'expires',
                type: 'DateTime',
            },
            user: {
                name: 'user',
                type: 'User',
                isDataModel: true,
                backLink: 'sessions',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'userId' },
            },
        },
        verificationToken: {
            identifier: {
                name: 'identifier',
                type: 'String',
            },
            token: {
                name: 'token',
                type: 'String',
                isId: true,
            },
            expires: {
                name: 'expires',
                type: 'DateTime',
            },
        },
    },
    uniqueConstraints: {
        user: {
            id: {
                name: 'id',
                fields: ['id'],
            },
            email: {
                name: 'email',
                fields: ['email'],
            },
        },
        role: {
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
        permission: {
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
        codeRun: {
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
        subject: {
            name: {
                name: 'name',
                fields: ['name'],
            },
        },
        lesson: {
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
        account: {
            provider_providerAccountId: {
                name: 'provider_providerAccountId',
                fields: ['provider', 'providerAccountId'],
            },
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
        session: {
            id: {
                name: 'id',
                fields: ['id'],
            },
            sessionToken: {
                name: 'sessionToken',
                fields: ['sessionToken'],
            },
        },
        verificationToken: {
            identifier_token: {
                name: 'identifier_token',
                fields: ['identifier', 'token'],
            },
            token: {
                name: 'token',
                fields: ['token'],
            },
        },
    },
    deleteCascade: {
        user: ['Account', 'Session'],
    },
    authModel: 'User',
};
export default metadata;
