const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization
    const { id } = req.params
    const incident = await connection('incidents')
      .where('ong_id', ong_id)
      .andWhere('id', id)
      .select('*')

    return res.json(incident)
  },
}
