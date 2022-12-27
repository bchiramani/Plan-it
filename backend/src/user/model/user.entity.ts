import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column ({ unique: true , nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @BeforeInsert()
    emailToLowerCase(){
        this.email=this.email.toLowerCase();
    }

}
