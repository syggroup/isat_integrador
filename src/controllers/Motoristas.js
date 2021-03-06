const MotoristasModel = require("../models/MotoristasModel");

class Motoristas {
  constructor(db) {
    this.motoristas_model = new MotoristasModel(db);
  }

  getMotoristas(data) {
    return this.motoristas_model.get(data);
  }
}

module.exports = Motoristas;
