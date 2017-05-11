# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts '===== Create initial data with seed file ====='
puts '===== Create User data ====='
users = User.create([
  { email:'test@example.com', name: 'test1', nickname: '1stUser', password: '12345678', password_confirmation: '12345678' },
  { email:'test2@example.com', name: 'test2', nickname: '2ndUser', password: '12345678', password_confirmation: '12345678' }
])

puts '===== Create Guitar data ====='
guitars = Guitar.create([
  { name: 'Les Paul', maker: 'Gibson', amount: 100 },
  { name: 'SG', maker: 'Gibson', amount: 50 },
  { name: 'Stratocaster', maker: 'Fender', amount: 200 },
  { name: 'Telecaster', maker: 'Fender', amount: 80 },
  { name: 'MUSIC MAN JP', maker: 'Music Man', amount: 5 }
])

puts '===== Create Player data ====='
players = Player.create([
  { name: 'Tak Matsumoto', group: "B'z", guitar_id: 1 },
  { name: 'Zakk Wylde', group: 'Black Label Society', guitar_id: 1 },
  { name: 'Tony Iommi', group: 'Black Sabbath', guitar_id: 2 },
  { name: 'Ritchie Blackmore', group: 'Deep Purple', guitar_id: 3 },
  { name: 'Yngwie Malmsteen', group: 'Rising Force', guitar_id: 3 },
  { name: 'John Petrucci', group: 'Dream Theater', guitar_id: 5 }
])

puts '===== Create Vote data ====='
votes = Vote.create([
  { user_id: 1, player_id: 1, amount: 2 },
  { user_id: 2, player_id: 1, amount: 1 },
  { user_id: 1, player_id: 2, amount: 1 },
  { user_id: 2, player_id: 3, amount: 1 }
])

puts '===== Completed creating initial data ====='
