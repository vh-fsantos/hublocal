import { Controller, Post, Body, UseGuards, Get, Delete, Put, Param } from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { Company } from '../entities/company.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('/companies')
export class CompanyController {
    constructor(private companyService: CompanyService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async findAll(): Promise<Company[]> {
        var companies = await this.companyService.findAll();
        return companies;
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async create(@Body() company: Company): Promise<Company> {
        return this.companyService.create(company);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    async delete(@Param('id') id: number): Promise<void> {
        await this.companyService.delete(id);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    async update(@Param('id') id: number, @Body() company: Company): Promise<Company> {
      return await this.companyService.update(id, company);
    }
}