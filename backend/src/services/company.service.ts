import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../entities/company.entity';

@Injectable()
export class CompanyService {
    constructor(@InjectRepository(Company) private companyRepository: Repository<Company>) {}

    async findAll(): Promise<Company[]> {
        let companies = await this.companyRepository.createQueryBuilder('company')
                                                    .leftJoinAndSelect('company.user', 'user')
                                                    .getMany();
        return companies;
    }

    async findById(id: number): Promise<Company> {
        let company = await this.companyRepository.findOne({where: {id}});
        return company;
    }

    async create(company: Company) : Promise<Company> {
        let newCompany = await this.companyRepository.save(company);
        return newCompany;
    }

    async delete(id: number) : Promise<void> {
        await this.companyRepository.delete(id);
    }

    async update(id: number, newCompnay: Company) : Promise<Company> {
        const company = await this.findById(id);
        const updatedCompany = Object.assign(company, newCompnay);
        return await this.companyRepository.save(updatedCompany);
    }
}