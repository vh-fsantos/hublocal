import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from 'src/entities/place.entity';

@Injectable()
export class PlaceService {
    constructor(@InjectRepository(Place) private placeRepository: Repository<Place>) {}

    async findAll(): Promise<Place[]> {
        let places = await this.placeRepository.createQueryBuilder('company')
                                                    .leftJoinAndSelect('company.user', 'user')
                                                    .getMany();
        return places;
    }

    async findById(id: number): Promise<Place> {
        let place = await this.placeRepository.findOne({where: {id}});
        return place;
    }

    async create(place: Place) : Promise<Place> {
        let newPlace = await this.placeRepository.save(place);
        return newPlace;
    }

    async delete(id: number) : Promise<void> {
        await this.placeRepository.delete(id);
    }

    async update(id: number, newPlace: Place) : Promise<Place> {
        const place = await this.findById(id);
        const updatedPlace = Object.assign(place, newPlace);
        return await this.placeRepository.save(updatedPlace);
    }
}