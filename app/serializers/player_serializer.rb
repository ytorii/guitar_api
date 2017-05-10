class PlayerSerializer < ActiveModel::Serializer

  attributes :id, :guitar_id, :name, :email, :users_votes_count
  attribute :user_voted

  has_many :users_votes

  def user_voted
    UsersVote.where(user_id: current_user.id, player_id: object.id).present?
  end
end
