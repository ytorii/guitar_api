class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :guitar_id, :name, :group, :votes_count
  attribute :user_voted, if: :current_user

  def user_voted
    object.votes.any?{|vote| vote.user_id === current_user.id}
  end
end

