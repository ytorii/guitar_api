class PlayerSerializer < ActiveModel::Serializer

  attributes :id, :guitar_id, :name, :email, :users_votes_count
  attribute :users_votes, if: :user_voted?

  def user_voted?
    object.id == current_user.id
  end
end
