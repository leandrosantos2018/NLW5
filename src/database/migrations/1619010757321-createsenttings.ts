import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createsenttings1619010757321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
       new Table({
           
        name: "settings",
        columns:[
            {
            name:"id",
            type: "uuid",
            isPrimary:true
            },
            {
                name:"username",
                type: "varchar",
                
            },
            {
                name: "chat",
                type: "boolean",
                default: true,
               
            },
            {
                name:"updated_at",
                type: "boolean",
                default: "now()",
                
            },
            {
                name: "created_at",
                type: "timestamp",
                default: "now()",
             
                    },

              ],
         })
    );
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("settings");
    }

}
