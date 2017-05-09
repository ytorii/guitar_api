# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  { email:'test@example.com', name: 'test1', nickname: '1stUser', password: '12345678', password_confirmation: '12345678' }
])

guitars = Guitar.create([
  { name: 'Les Paul', maker: 'Gibson', amount: 100 },
  { name: 'SG', maker: 'Gibson', amount: 50 },
  { name: 'Stratocaster', maker: 'Fender', amount: 200 },
  { name: 'Telecaster', maker: 'Fender', amount: 80 },
  { name: 'MUSIC MAN JP', maker: 'Music Man', amount: 5 }
])

players = Player.create([
  { name: 'Tak Matsumoto', email: 'tk@example.com', guitar_id: 1 },
  { name: 'Zakk Wylde', email: 'zw@example.com', guitar_id: 1 },
  { name: 'Tonny Iomi', email: 'ti@example.com', guitar_id: 2 },
  { name: 'Richie Blackmore', email: 'rb@example.com', guitar_id: 3 },
  { name: 'Yngwie Malmsteen', email: 'ym@example.com', guitar_id: 3 },
  { name: 'John Petrucci', email: 'jp@example.com', guitar_id: 5 }
])

usersvotes = UsersVote.create([
  { user_id: 1, player_id: 1, amount: 2 },
  { user_id: 1, player_id: 2, amount: 1 }
])
