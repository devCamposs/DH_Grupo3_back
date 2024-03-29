const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
      },
      nome: {
        type: DataTypes.STRING,
        notNull: true,
      },
      email: {
        type: DataTypes.STRING,
        notNull: true,
      },
      password: {
        type: DataTypes.STRING,
        notNull: true,
      },
      newsletter: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
    },
    {
      tableName: "usuario",
      underscored: true,
      timestamps: false,
    }
  );
/******** Duvida a tabela Usuario tbm não esta associada com a Pagamento? ******* */
  // Usuario.associate = function (models) {
  //   Usuario.hasMany(models.Endereco, {
  //     as: "Endereco",
  //     foreignKey: "usuario_id",
  //   }),
  //     (Usuario.associate = function (models) {
  //       Usuario.hasMany(models.Pedido, {
  //         as: "Pedido",
  //         foreignKey: "pedido_id",
  //       });
  //     });
  // };
  return Usuario;
};
