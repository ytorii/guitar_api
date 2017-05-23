class VotesController < ApplicationController
  before_action :set_vote, only: [ :destroy ]
  before_action :authenticate_user!

  # POST /votes
  def create
    @vote = Vote.new(vote_params.merge(user_id: current_user.id))

    if @vote.save
      @player = Player.find(@vote.player_id)
      render json: @player, status: :created
    else
      render json: @vote.errors, status: :unprocessable_entity
    end
  end

  # DELETE /votes/1
  def destroy
    if @vote.destroy
      @player = Player.find(@vote.player_id)
      render json: @player
    else
      render json: @vote.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vote
      @vote = Vote.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def vote_params
      params.require(:vote).permit(:player_id)
    end
end
