class PlayerSerializer < ActiveModel::Serializer

  attributes :id, :guitar_id, :name, :email, :users_votes_count
  attribute :user_voted

  def user_voted
    if current_user
      return object.users_votes.any?{ |v| v.user_id == current_user.id }
    end
    return false
  end
end
