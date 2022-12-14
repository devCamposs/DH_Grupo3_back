const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define(
    "Endereco",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
      },
      logradouro: {
        type: DataTypes.STRING,
        notNull: true,
      },
      numero: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
      CEP: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
      usuarios_id: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
    },
    {
      tableName: "endereco",
      underscored: true,
      timestamps: false,
    }
  );

  Endereco.associate = function (models) {
    Endereco.belongsTo(models.Usuario, {
      as: "Endereco",
      foreignKey: "usuarios_id",
    }),
      (Endereco.associate = function (models) {
        Endereco.hasMany(models.Pedido, {
          as: "Pagamento",
          foreignKey: "endereco_id",
        });
      });
  };

  return Endereco;
};
