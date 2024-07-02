# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.11.2](https://github.com/LightDev1/typeorm-cursor-pagination/compare/v0.11.1...v0.11.2) (2024-07-02)

### [0.11.1](https://github.com/LightDev1/typeorm-cursor-pagination/compare/v0.11.0...v0.11.1) (2024-07-02)

## 0.11.0 (2024-07-02)


### Features

* add setting own pagination direction for each key ([65e6625](https://github.com/LightDev1/typeorm-cursor-pagination/commit/65e6625eec1d30545e2f2bfdfd1b3fb221c84c78))
* added findOptions setting in buildPaginator ([903a795](https://github.com/LightDev1/typeorm-cursor-pagination/commit/903a79507961da6e9cb6138b21c4856c90b689d7))
* cursor-based pagination with TypeORM query builder ([b721eaf](https://github.com/LightDev1/typeorm-cursor-pagination/commit/b721eafbd049aaa91ec9a7dc127c2bf1851c8e86))
* **paginator:** convert Order type to enum ([1f4bcb4](https://github.com/LightDev1/typeorm-cursor-pagination/commit/1f4bcb447956ca497bcbada997c722d5899e77ae))
* return cursor and entities with single paginator.paginate function call ([edbfa64](https://github.com/LightDev1/typeorm-cursor-pagination/commit/edbfa64a0a268a7ba9b66b54f8cee143c26ce5f6))


### Bug Fixes

* **$Paginator:** clone a query builder to prevent mutating the actual passed one ([4dcc6b4](https://github.com/LightDev1/typeorm-cursor-pagination/commit/4dcc6b450be885d42f7990f66346aba9de70a4fc))
* escape pagination keys to allow camel-cased property names ([efa7378](https://github.com/LightDev1/typeorm-cursor-pagination/commit/efa73782ec29b0c829b5b30d609f6b80743a30a6)), closes [#8](https://github.com/LightDev1/typeorm-cursor-pagination/issues/8)
* fix test typo ([4d8e002](https://github.com/LightDev1/typeorm-cursor-pagination/commit/4d8e002174a0b213fdca3c780057d479674e9120))
* handle unexpected date type reflection ([8124221](https://github.com/LightDev1/typeorm-cursor-pagination/commit/8124221060c8e0dca3740dbf9efc902d96a7e129))
* remove alias and pagination keys double quote and escape function ([cc22879](https://github.com/LightDev1/typeorm-cursor-pagination/commit/cc228793e33697d97b158d2a44c094a11951b09e))
* remove escape pagination keys and use double quote instead ([dc75226](https://github.com/LightDev1/typeorm-cursor-pagination/commit/dc75226e6abd07e4e7d48a81c0d50ee22c4b8f7c))
* remove paginationUniqueKey option ([e43f328](https://github.com/LightDev1/typeorm-cursor-pagination/commit/e43f3282958e79f3d0c86ae1be9d76b20a40d3a8))
* remove paging by inner join approach ([0cb764a](https://github.com/LightDev1/typeorm-cursor-pagination/commit/0cb764aab940e6987df57d68ccc0af78950cd9c8))
* remove test folder build to fix module entry ([a78db99](https://github.com/LightDev1/typeorm-cursor-pagination/commit/a78db993c8dcfe5b8f64b62b2b30203862a46fd7))
* returned original pagination where logic ([f719e40](https://github.com/LightDev1/typeorm-cursor-pagination/commit/f719e4093c05a0e8927340c74ba7f9c93d271236))
* **tests:** make float column test deterministic ([a021235](https://github.com/LightDev1/typeorm-cursor-pagination/commit/a021235cd95e415e2732efac8f89adf5f4258448))
* use getMetadata to lookup the prototype chain ([e096c89](https://github.com/LightDev1/typeorm-cursor-pagination/commit/e096c89aee3f3e84f1fb7585737ad6d8d2de67b7))

### [0.10.3](https://github.com/LightDev1/typeorm-cursor-pagination/compare/v0.10.2...v0.10.3) (2023-12-28)


### Bug Fixes

* returned original pagination where logic ([f719e40](https://github.com/LightDev1/typeorm-cursor-pagination/commit/f719e4093c05a0e8927340c74ba7f9c93d271236))

### 0.10.2 (2023-12-27)


### Features

* added findOptions setting in buildPaginator ([903a795](https://github.com/LightDev1/typeorm-cursor-pagination/commit/903a79507961da6e9cb6138b21c4856c90b689d7))
* cursor-based pagination with TypeORM query builder ([b721eaf](https://github.com/LightDev1/typeorm-cursor-pagination/commit/b721eafbd049aaa91ec9a7dc127c2bf1851c8e86))
* **paginator:** convert Order type to enum ([1f4bcb4](https://github.com/LightDev1/typeorm-cursor-pagination/commit/1f4bcb447956ca497bcbada997c722d5899e77ae))
* return cursor and entities with single paginator.paginate function call ([edbfa64](https://github.com/LightDev1/typeorm-cursor-pagination/commit/edbfa64a0a268a7ba9b66b54f8cee143c26ce5f6))


### Bug Fixes

* **$Paginator:** clone a query builder to prevent mutating the actual passed one ([4dcc6b4](https://github.com/LightDev1/typeorm-cursor-pagination/commit/4dcc6b450be885d42f7990f66346aba9de70a4fc))
* escape pagination keys to allow camel-cased property names ([efa7378](https://github.com/LightDev1/typeorm-cursor-pagination/commit/efa73782ec29b0c829b5b30d609f6b80743a30a6)), closes [#8](https://github.com/LightDev1/typeorm-cursor-pagination/issues/8)
* fix test typo ([4d8e002](https://github.com/LightDev1/typeorm-cursor-pagination/commit/4d8e002174a0b213fdca3c780057d479674e9120))
* handle unexpected date type reflection ([8124221](https://github.com/LightDev1/typeorm-cursor-pagination/commit/8124221060c8e0dca3740dbf9efc902d96a7e129))
* remove alias and pagination keys double quote and escape function ([cc22879](https://github.com/LightDev1/typeorm-cursor-pagination/commit/cc228793e33697d97b158d2a44c094a11951b09e))
* remove escape pagination keys and use double quote instead ([dc75226](https://github.com/LightDev1/typeorm-cursor-pagination/commit/dc75226e6abd07e4e7d48a81c0d50ee22c4b8f7c))
* remove paginationUniqueKey option ([e43f328](https://github.com/LightDev1/typeorm-cursor-pagination/commit/e43f3282958e79f3d0c86ae1be9d76b20a40d3a8))
* remove paging by inner join approach ([0cb764a](https://github.com/LightDev1/typeorm-cursor-pagination/commit/0cb764aab940e6987df57d68ccc0af78950cd9c8))
* remove test folder build to fix module entry ([a78db99](https://github.com/LightDev1/typeorm-cursor-pagination/commit/a78db993c8dcfe5b8f64b62b2b30203862a46fd7))
* **tests:** make float column test deterministic ([a021235](https://github.com/LightDev1/typeorm-cursor-pagination/commit/a021235cd95e415e2732efac8f89adf5f4258448))
* use getMetadata to lookup the prototype chain ([e096c89](https://github.com/LightDev1/typeorm-cursor-pagination/commit/e096c89aee3f3e84f1fb7585737ad6d8d2de67b7))

## [0.10.0](https://github.com/benjamin658/typeorm-cursor-pagination/compare/v0.9.1...v0.10.0) (2022-10-31)


### Bug Fixes

* remove paginationUniqueKey option ([e43f328](https://github.com/benjamin658/typeorm-cursor-pagination/commit/e43f3282958e79f3d0c86ae1be9d76b20a40d3a8))

### [0.9.1](https://github.com/benjamin658/typeorm-cursor-pagination/compare/v0.9.0...v0.9.1) (2022-07-12)


### Bug Fixes

* **$Paginator:** clone a query builder to prevent mutating the actual passed one ([4dcc6b4](https://github.com/benjamin658/typeorm-cursor-pagination/commit/4dcc6b450be885d42f7990f66346aba9de70a4fc))

## [0.9.0](https://github.com/benjamin658/typeorm-cursor-pagination/compare/v0.8.1...v0.9.0) (2022-07-05)

### [0.8.1](https://github.com/benjamin658/typeorm-cursor-pagination/compare/v0.8.0...v0.8.1) (2022-03-21)


### Features

* **paginator:** convert Order type to enum ([1f4bcb4](https://github.com/benjamin658/typeorm-cursor-pagination/commit/1f4bcb447956ca497bcbada997c722d5899e77ae))


### Bug Fixes

* **tests:** make float column test deterministic ([a021235](https://github.com/benjamin658/typeorm-cursor-pagination/commit/a021235cd95e415e2732efac8f89adf5f4258448))

## [0.8.0](https://github.com/benjamin658/typeorm-cursor-pagination/compare/v0.7.0...v0.8.0) (2022-03-18)

## [0.7.0](https://github.com/benjamin658/typeorm-cursor-pagination/compare/v0.6.0...v0.7.0) (2022-02-21)


### Bug Fixes

* handle unexpected date type reflection ([8124221](https://github.com/benjamin658/typeorm-cursor-pagination/commit/8124221060c8e0dca3740dbf9efc902d96a7e129))
