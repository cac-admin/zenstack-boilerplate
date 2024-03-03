# Site Created Using Create T3 App with ZenStack

## Steps to get started with tRPC and ZenStack

### Initialization Commands

- npx create-t3-app@latest
    - Use TypeScript
    - Use tRPC
    - Use NextAuth
    - Use Prisma
    - Use App Router
    - Use in “prisma” mode for relational database (probably)
- npx zenstack@latest init

### Install tRPC ZenStack Plugin
1. npm install @zenstackhq/trpc
2. Add the following to `schema.zmodel`:
```
plugin trpc {
    provider = '@zenstackhq/trpc'
    output = 'src/server/routers/generated'
```

or use any other directory you want.

3. in `src/app/model/[...path]/route.ts` change the content to the following:

```js
async function getPrisma() {
    const session = await getServerAuthSession();
    return enhance(prisma, { user: session?.user });
}

const handler = NextRequestHandler({ getPrisma, useAppDir: true });

export {
    handler as GET,
    handler as POST,
    handler as PUT,
    handler as PATCH,
    handler as DELETE,
};
```

The following are the generic Create-T3-App docs, which are also very helpful.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
