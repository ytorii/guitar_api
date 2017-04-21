# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guitars = Guitar.create([
  { name: 'Les Paul', maker: 'Gibson', amount: 100 },
  { name: 'SG', maker: 'Gibson', amount: 50 },
  { name: 'Stratocaster', maker: 'Fender', amount: 200 },
  { name: 'Telecaster', maker: 'Fender', amount: 80 },
  { name: 'MUSIC MAN JP', maker: 'Music Man', amount: 5 }
])
