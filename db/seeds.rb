require "swapi"
require 'open-uri'


# Will print a JSON response with Luke Skywalker information
luke = Swapi.get_person 1

# Will print a JSON response with Tatooine specs
tatooine = Swapi.get_planet 1
