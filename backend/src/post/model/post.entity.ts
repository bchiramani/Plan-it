import { ServiceType } from 'src/service-types/model/service-types.entity';
import { User } from 'src/user/model/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class APost {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    date: string;

    @ManyToOne((type) => User, (user) => user.id)
    user: User ;

    // @ManyToOne((type) => ServiceType, (serviceType) => serviceType.id)
    // serviceType: ServiceType;

}
