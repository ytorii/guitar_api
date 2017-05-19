class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :guitar_id, :name, :group, :votes_count
  attribute :vote_id, if: :current_user

  def vote_id
    vote = object.votes.find{|vote| vote.user_id == current_user.id}
    vote.id if vote
  end
end

