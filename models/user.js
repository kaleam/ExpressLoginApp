import { DataTypes, Model } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull } from '@sequelize/core/decorators-legacy';

class User extends Model {
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    id;

    @Attribute(DataTypes.STRING)
    @NotNull
    name;

    @Attribute(DataTypes.STRING)
    @NotNull
    email;

    @Attribute(DataTypes.STRING)
    @NotNull
    password;
}