class TicketsController < ApplicationController

  def update
    ticket = Ticket.find(params[:id])
    ticket.attributes = ticket_params

    respond_to do |format|
      format.html do
        if ticket.save
          flash[:notice] = 'Updated!'
        else
          flash[:error] = ticket.errors.full_messages.join(', ')
        end
        redirect_to admin_raffle_path(ticket.raffle.id)
      end
      format.json do
        if ticket.save
          render json: {}, status: :ok
        else
          render json: ticket.errors.full_messages, status: :unprocessable_entity
        end
      end
    end
  end

  private

  def ticket_params
    params.require(:ticket).permit(
      :drawn
    )
  end
end
