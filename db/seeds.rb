require "faker"
require 'open-uri'
puts "Seeding..."

User.create (
name: "Princess Leia"
email: "leia@gmail.com",
password: "Princ3ss!",
height: Faker::Number.number(digits: 1)"feet" Faker::Number.number(digits: 1)"inches",
mass: Faker::Number.number(digits: 10)"kgs",
birth_year: Faker::Number.number(digits: 4),
gender: "Female",
homeworld: Faker::Movies::StarWars.planet
),

User.create (
  name: "C3P0"
  email: "c3p0@gmail.com",
  password: "Brobot420!",
  height: Faker::Number.number(digits: 1)"feet" Faker::Number.number(digits: 1)"inches",
  mass: Faker::Number.number(digits: 10)"kgs",
  birth_year: Faker::Number.number(digits: 4),
  gender: "N/A",
  homeworld: Faker::Movies::StarWars.planet
  ),

(30).times do User.create (
 name: Faker::Movies::StarWars.character,
 email: Faker::Movies::StarWars.vehicle"@gmail.com",
 password: Faker::Alphanumeric.alpha(number: 10),
 height: Faker::Number.number(digits: 1)"feet" Faker::Number.number(digits: 1)"inches",
 mass: Faker::Number.number(digits: 10)"kgs",
 birth_year: Faker::Number.number(digits: 4),
 gender: Faker::Gender.binary_type,
 homeworld: Faker::Movies::StarWars.planet
)

puts "Done seeding!"
