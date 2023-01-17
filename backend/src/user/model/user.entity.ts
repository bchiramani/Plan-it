import { APost } from 'src/post/model/post.entity';
import { ServiceType } from 'src/service-types/model/service-types.entity';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column ({ unique: true , nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false })
    companyName: string;

    @Column({ nullable: false })
    phoneNumber: number

    @Column()
    logo: string;

    @Column()
    description: string;

    @Column({ nullable: false })
    role: string;

    @BeforeInsert()
    emailToLowerCase(){
        this.email = this.email.toLowerCase();
    }

    @OneToMany((type) => APost, (post) => post.id, {
        cascade: true,
    })
    posts : APost[];

    @ManyToOne((serviceType) => ServiceType, (serviceType) => serviceType.id)
    serviceType : ServiceType;


}
