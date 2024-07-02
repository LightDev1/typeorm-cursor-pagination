import { FindManyOptions, ObjectLiteral, ObjectType } from 'typeorm';

import Paginator, { Order, PaginationOrder } from './Paginator';

export interface PagingQuery {
  afterCursor?: string;
  beforeCursor?: string;
  limit?: number;
  order?: Order | 'ASC' | 'DESC';
}

export interface PaginationOptions<Entity> {
  entity: ObjectType<Entity>;
  alias?: string;
  query?: PagingQuery;
  paginationKeys?: Extract<keyof Entity, string>[];
  findOptions?: FindManyOptions<Entity>;
  paginationOrder?: PaginationOrder
}

export function buildPaginator<Entity extends ObjectLiteral>(
  options: PaginationOptions<Entity>,
): Paginator<Entity> {
  const {
    entity,
    query = {},
    alias = entity.name.toLowerCase(),
    paginationKeys = ['id' as any],
    findOptions,
    paginationOrder
  } = options;

  const paginator = new Paginator(entity, paginationKeys);

  paginator.setAlias(alias);

  if (query.afterCursor) {
    paginator.setAfterCursor(query.afterCursor);
  }

  if (query.beforeCursor) {
    paginator.setBeforeCursor(query.beforeCursor);
  }

  if (query.limit) {
    paginator.setLimit(query.limit);
  }

  if (query.order) {
    paginator.setOrder(query.order as Order);
  }

  if (findOptions) {
    paginator.setFindOptions(findOptions);
  }

  if (paginationOrder) {
    paginator.setPaginationOrderByKeys(paginationOrder)
  }

  return paginator;
}
