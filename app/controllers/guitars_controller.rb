class GuitarsController < ApplicationController
  before_action :set_guitar, only: [:show, :update, :destroy]
  #before_action :authenticate_user!, only: [:create, :update, :destroy]

  # GET /guitars
  def index
    @guitars = Guitar.all.includes(players: :votes)
    # Set fetch players 'false' when players are unneeded.
    #render json: @guitars, scope: { fetch_players: false }
    render json: @guitars
  end

  # GET /guitars/1
  def show
    render json: @guitar
  end

  # POST /guitars
  def create
    @guitar = Guitar.new(guitar_params)

    if @guitar.save
      render json: @guitar, status: :created, location: @guitar
    else
      render json: @guitar.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /guitars/1
  def update
    if @guitar.update(guitar_params)
      render json: @guitar
    else
      render json: @guitar.errors,
        status: :unprocessable_entity
    end
  end

  # DELETE /guitars/1
  def destroy
    if @guitar.destroy
      render json: @guitar.id
    else
      render json: @guitar.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_guitar
      @guitar = Guitar.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def guitar_params
      params.require(:guitar).permit(:id, :name, :maker, :amount)
    end

    def fetch_players_scope
      { fetch_player: true,
        current_user: current_user,
        user_votes: user_votes }
    end

    def user_votes
      Vote.where(
        user_id: current_user.id,
        player_id: @guitar.players.pluck(:id)
      ) if current_user
    end
end
