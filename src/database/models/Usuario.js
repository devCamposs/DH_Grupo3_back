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
        type: DataTypes.STRING, // saber se poder ser outross type pois senha pode ter numeros INTEGER e STRING
        notNull: true,
      },
      newsletter: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
      newsletter: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
    },
    {
      tableName: "Usuario",
      underscored: true,
      timestamps: false,
    }
  );

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Endereco, {
      as: "Endereco",
      foreginKey: "usuario_id",
    });
  };

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Pedido, {
      as: "Pedido",
      foreginKey: "pedido_id",
    });
  };
  return Usuario;
};

   