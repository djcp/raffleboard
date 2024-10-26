# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Raffle.destroy_all
Ticket.destroy_all
Raffle.create!(name: 'Big Money', number_of_tickets: ENV.fetch('NUMBER_OF_TICKETS', 150))
