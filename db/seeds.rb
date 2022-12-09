require "faker"
require 'open-uri'

user1 = User.create (
 name: Faker::Movies::StarWars.character,
 email:
 password:
 height:
 mass:
 hair_color:
 skin_color:
 eye_color: "GRN"
 birth_year: "199X"
 gender:
 homeworld:
)
