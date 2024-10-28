export interface PageReponseDtos <T>{
    page: number;
    limit: number;
    total: number;
    next: number;
    prev: number;

    data:T[];

}