import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { APost } from 'src/post/model/post.entity';
import { User } from 'src/user/model/user.entity';

@Entity()
export class ServiceType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    serviceName: Services;

  

    @OneToMany((type) => User, (user) => user.id)
    users: User[] ;

}
