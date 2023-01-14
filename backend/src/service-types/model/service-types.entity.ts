import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { APost } from 'src/post/model/post.entity';

@Entity()
export class ServiceType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    serviceName: Services;

    @OneToMany((type) => APost, (post) => post.id)
    posts: APost[] ;

}
