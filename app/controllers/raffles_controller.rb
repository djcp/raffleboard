class RafflesController < ApplicationController
  def index
    @raffles = Raffle.all
  end

  def show
    @raffle = Raffle.find(params[:id])
    @tickets = @raffle.tickets.order('number asc')

    respond_to do |format|
      format.html { }
      format.json { render json: @raffle, include: :tickets }
    end
  end
end
