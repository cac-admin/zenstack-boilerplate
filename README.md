# Site Created Using Create T3 App with ZenStack

## Steps to get started with tRPC and ZenStack

### Initialization Commands

- npx create-t3-app@latest
    - Use TypeScript
    - Use tRPC
    - Use NextAuth
    - Use Prisma
    - Use App Router
- npx zenstack@latest init

### Install tRPC ZenStack Plugin
1. npm install @zenstackhq/trpc
2. Add the following to `schema.zmodel`:
```
plugin trpc {
    provider = '@zenstackhq/trpc'
    output = 'src/server/routers/generated'
}
```

or use any other directory you want.

3. By default, Create T3 App will name the database db, while ZenStack requires it to be named prisma. In src/server/api/trpc.ts, change the return of the function createTRPCContext from:

```javascript
  return {
    db,
    session,
    ...opts,
  };
```
to:
```javascript
  return {
    prisma: db,
    session,
    ...opts,
  };
```
The following info is provided by Create T3 App. Have a look around the repository and try running this sample application, or just use it as a reference!

## What's next? How do I make an app with this?

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
