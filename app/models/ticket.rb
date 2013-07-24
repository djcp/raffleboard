class Ticket < ActiveRecord::Base
  attr_accessible :drawn, :number, :raffle_id
  belongs_to :raffle
end
