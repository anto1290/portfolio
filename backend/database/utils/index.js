const _nanoid = require('nanoid')
const DEFAULT_RANDOM_ALPHA = '1234567890abcdefhjklmnopqrstuvwxyz'
const nanoid = _nanoid.customAlphabet(DEFAULT_RANDOM_ALPHA, 8)
const knex = require('../index')
const id = (table) => {
  table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
}
const cAt = (table) => {
  table.timestamp('created_at').defaultTo(knex.fn.now())
}
const uAt = (table) => {
  table.timestamp('updated_at').defaultTo(knex.fn.now())
}

const dAt = (table) => {
  table.timestamp('deleted_at')
}
const timestamp = (table) => {
  table.timestamps(false, true)
  // table.timestamp('created_at').defaultTo(knex.fn.now())
  // table.timestamp('updated_at').defaultTo(null).onUpdate(knex.fn.now())
}
const issuedBy = (table, setForeign = false) => {
  table.uuid('issued_by').unsigned().nullable()
  if (setForeign) { table.foreign('issued_by').references('accounts.id').onDelete('SET NULL').onUpdate('CASCADE') }
}
const randomAlpha = (num = 8) => {
  return _nanoid.customAlphabet(DEFAULT_RANDOM_ALPHA, num)()
}

const codeGeneratorString = (length = 6) => {
  return `lower(replace(cast(uuid_generate_v4() as varchar(${length})), '-', ''))`
}
const codeGeneratorNumber = (length = 6) => {
  return `array_to_string(ARRAY(SELECT chr((48 + round(random() * 9)) :: integer) FROM generate_series(1,${length})), '')`
}

module.exports = {
  _nanoid,
  nanoid,
  id,
  cAt,
  uAt,
  dAt,
  timestamp,
  issuedBy,
  randomAlpha,
  codeGeneratorString,
  codeGeneratorNumber
}
