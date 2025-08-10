import { Animal as PrismaAnimal } from '@prisma/client'

export type AnimalStatus = 'available' | 'adopted' | 'pending'

export class Animal {
  constructor(
    public id: string,
    public name: string,
    public type: string,
    public gender: 'Macho' | 'Fêmea',
    public userId: string,
    public status: AnimalStatus,
    public race?: string,
    public description?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
  ) {}

  isAvailable(): boolean {
    return this.status === 'available'
  }

  isAdopted(): boolean {
    return this.status === 'adopted'
  }

  shortDescription(maxLength = 50): string {
    if (!this.description) return ''
    return this.description.length > maxLength
      ? this.description.slice(0, maxLength) + '...'
      : this.description
  }

  static fromPrisma(animal: PrismaAnimal): Animal {
    return new Animal(
      animal.id,
      animal.name,
      animal.type,
      animal.gender as 'Macho' | 'Fêmea',
      animal.userId,
      animal.status as AnimalStatus,
      animal.race,
      animal.description,
      animal.createdAt,
      animal.updatedAt,
    )
  }
}

export namespace CreateAnimalRepositoryDTO {
  export type Params = {
    name: string
    type: string
    gender: 'Macho' | 'Fêmea'
    race?: string
    description?: string
    userId: string
  }

  export type Result = Animal
}

export namespace UpdateAnimalStatusRepositoryDTO {
  export type Params = {
    id: string
    status: AnimalStatus
    userId: string
  }

  export type Result = Animal | null
}