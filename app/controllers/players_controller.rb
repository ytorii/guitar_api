class PlayersController < ApplicationController
  before_action :set_player, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  # GET /players
  def index
    @players = Player.find_by(guitar_id: params[:guitar_id])
    render json: @players
  end

  # GET /players/1
  def show
    render json: @player
  end

  # POST /players
  def create
    @player = Player.new(player_params)

    if @player.save
      render json: @player, status: :created
    else
      render json: @player.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /players/1
  def update
    if @player.update(player_params)
      render json: @player
    else
      render json: @player.errors.full_messages, status: :unprocessable_entity
    end
  end

  # DELETE /players/1
  def destroy
    if @player.destroy
      render json: @player.id
    else
      render json: @player.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player
      @player = Player.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def player_params
      params.require(:player).permit(:name, :group, :guitar_id)
    end
end
