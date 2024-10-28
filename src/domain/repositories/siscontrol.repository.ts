import { PageReponseDtos } from "../dtos/shared/pagination.response.dto";

export abstract class BaseRepository<T> {
  abstract createItem(item: T): Promise<T>;
  abstract getItems(page: number, limit: number): Promise<PageReponseDtos<T>>;
  abstract getItemById(id: number): Promise<T>;
  abstract updateItem(item: T): Promise<T>;
  abstract deleteItem(id: number): Promise<T>;
}
