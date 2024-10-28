import {VisitanteEntity} from '../../entities/visitante.entity';
import { BaseRepository } from '../../repositories/siscontrol.repository';
export interface DeleteVisitanteUseCase{
    execute(id: number): Promise<VisitanteEntity>
}

export class DeleteVisitante implements DeleteVisitanteUseCase{
    constructor(private readonly repository: BaseRepository<VisitanteEntity>) {
        
    }
    execute(id: number): Promise<VisitanteEntity> {
        return this.repository.deleteItem(id);
    }
}
