
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
<a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Description

This is a blogging platform built using the NestJS framework. It follows a microservices architecture with individual services for Users, Posts, and Comments. Each service handles its own database, routing, and business logic.

### Microservices Included:

- **UserService**: Handles user registration and retrieval.
- **PostService**: Manages blog post creation and retrieval by post or by user.
- **CommentService**: Allows users to add comments to posts.

## Project setup

```bash
npm install
```

## Run Different Microservices

```bash
npm run start:userservice
npm run start:postservice
npm run start:commentservice
```

## Folder Structure

```
BLOG-NEST/
│
├── apps/
│   ├── blog-nest/
│
│   ├── commentservice/
│   │   ├── src/
│   │   │   ├── comment/
│   │   │   │   ├── dto/
│   │   │   │   ├── entities/
│   │   │   │   ├── comment.controller.ts
│   │   │   │   ├── comment.service.ts
│   │   │   │   └── comment.service.spec.ts
│   │   │   ├── commentservice.module.ts
│   │   │   ├── commentservice.controller.ts
│   │   │   ├── commentservice.controller.spec.ts
│   │   │   ├── commentservice.service.ts
│   │   │   ├── main.ts
│   │   │   ├── test-env.ts
│   │   │   └── test/
│   │   ├── .env
│   │   ├── Dockerfile
│   │   ├── tsconfig.app.json
│   │   └── app.module.ts
│
│   ├── postservice/
│   │   ├── src/
│   │   │   ├── post/
│   │   │   │   ├── dto/
│   │   │   │   ├── entities/
│   │   │   │   ├── post.controller.ts
│   │   │   │   ├── post.service.ts
│   │   │   │   └── post.service.spec.ts
│   │   │   ├── postservice.module.ts
│   │   │   ├── postservice.controller.ts
│   │   │   ├── postservice.controller.spec.ts
│   │   │   ├── postservice.service.ts
│   │   │   ├── main.ts
│   │   │   ├── test-env.ts
│   │   │   └── test/
│   │   ├── .env
│   │   ├── Dockerfile
│   │   ├── tsconfig.app.json
│   │   └── app.module.ts
│
│   └── userservice/
│       ├── src/
│       │   ├── user/
│       │   │   ├── dto/
│       │   │   ├── entities/
│       │   │   ├── user.controller.ts
│       │   │   ├── user.service.ts
│       │   │   └── user.service.spec.ts
│       │   ├── userservice.controller.ts
│       │   ├── userservice.controller.spec.ts
│       │   ├── userservice.service.ts
│       │   ├── userservice.module.ts
│       │   ├── main.ts
│       │   ├── test-env.ts
│       │   └── test/
│       ├── .env
│       ├── Dockerfile
│       ├── tsconfig.app.json
│       └── app.module.ts
│
├── coverage/
├── dist/
├── node_modules/
├── .gitignore
```

## Unit Testing

We use Jest for unit testing across all microservices.

### Sample Test - Comment Service

```ts
describe('CommentService', () => {
  let service: CommentService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CommentService, {
        provide: getRepositoryToken(Comment),
        useClass: Repository,
      }],
    }).compile();

    service = module.get<CommentService>(CommentService);
  });

  it('should create a comment', async () => {
    const dto = { text: 'Great post!', postId: 1 };
    const result = await service.create(dto);
    expect(result).toHaveProperty('text', 'Great post!');
  });
});
```

### Coverage

To check coverage, use:

```bash
npm run test:cov
```

This will generate a report showing line, branch, and function coverage for all services.

## Author

- **Anamika Tiwari**  
- GitHub: [Anamika0246](https://github.com/Anamika0246)  
- Email: anamikatiwari0246@gmail.com

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
