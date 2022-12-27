import { User } from 'src/user/model/user.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ServiceProvider extends User {

    // required column
    @Column({ nullable: false })
    serviceType: ServiceType;
    @Column({ nullable: false })
    companyName: string;
    @Column({ nullable: false })
    companyPhone: string;
    @Column({ nullable: false })
    companyEmail: string;
    @Column({ nullable: false })
    companyDescription: string;
    companyLogo: string;
    companyAddress: string;
    companyWebsite: string;
    
    
}

