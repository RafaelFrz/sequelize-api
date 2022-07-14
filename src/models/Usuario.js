import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config/config";

const Usuario = sequelize.define(
   'usuarios',
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      nome: {
         type: DataTypes.STRING(200),
         unique: true,
         allowNull: false,
      },
      cpfcnpj: {
         type: DataTypes.STRING(18),
         unique: true,
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING(200),
         unique: true,
         allowNull: true,
      },
      telefone: {
         type: DataTypes.STRING(20),
         unique: true,
         allowNull: true,
      }

   },
   {
      freezeTableName: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
   }
)

export default Usuario;