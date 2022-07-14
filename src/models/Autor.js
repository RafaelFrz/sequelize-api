import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config/config";

const Autor = sequelize.define(
    'autores',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(200),
            unique: true,
        },
        email: {
            type: DataTypes.STRING(200),
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

export default Autor;