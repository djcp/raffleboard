class TicketsController < ApplicationController

  def update
    ticket = Ticket.find(params[:id])
    ticket.attributes = params[:tickets]

    respond_to do |format|
      format.json do
        if ticket.save
          render :nothing
        else
          render json: ticket.errors.full_messages, status: :unprocessable_entity
        end
      end
    end
  end

end
