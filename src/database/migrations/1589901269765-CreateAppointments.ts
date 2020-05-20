import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1589901269765
  implements MigrationInterface {
  // executar migration: "migration:run"
  public async up(queryRunner: QueryRunner): Promise<void> {
    // o que a migration vai fazer
    // migration só pode ser alterada quando ela ainda não foi enviada
    // ao sistema de versionamento. Se não, fazer outra e atualizar.
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
            comment: 'Primary key column',
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // desfazer o que faz no up
    await queryRunner.dropTable('appointments');
  }
}
