class Raffle < ActiveRecord::Base
  attr_accessible :name, :number_of_tickets

  has_many :tickets, order: 'number ASC'
  validates :number_of_tickets,  presence: true,  numericality: true

  after_create do
    number_of_tickets.times do |i|
      Ticket.create!(drawn: false, number: i + 1, raffle_id: id)
    end
  end

end
