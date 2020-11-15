class Api::V1::BookingsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    render json: Booking.all
  end

  def create
    p 'create'
    booking = Booking.create(booking_params)
    p 'create 2'
    if booking
      render json: booking
    else
      render json: booking.errors
    end
    
  end

  def destroy
    booking.destroy(params[:id])
  end

  def update
    booking = Booking.find(params[:id])
    booking.update_attributes(Booking_params)
    render json: booking
  end

  private

  def booking_params
    p 'booking_params'
    params.permit(
      :start_date,
      :end_date,
      :space_id
    )
  end
end
