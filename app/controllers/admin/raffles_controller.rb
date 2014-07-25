class Admin::RafflesController < ApplicationController

  def index
    @raffles = Raffle.all
  end

  def show
    @raffle = Raffle.find(params[:id])
    @tickets = @raffle.tickets.order('number')
  end
end
