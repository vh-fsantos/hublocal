import { Controller, Post, Body, UseGuards, Get, Delete, Put, Param } from '@nestjs/common';
import { PlaceService } from '../services/place.service';
import { Place } from '../entities/place.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('/places')
export class PlaceController {
    constructor(private placeService: PlaceService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async findAll(): Promise<Place[]> {
        var places = await this.placeService.findAll();
        return places;
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async create(@Body() place: Place): Promise<Place> {
        return this.placeService.create(place);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    async delete(@Param('id') id: number): Promise<void> {
        await this.placeService.delete(id);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    async update(@Param('id') id: number, @Body() place: Place): Promise<Place> {
      return await this.placeService.update(id, place);
    }
}