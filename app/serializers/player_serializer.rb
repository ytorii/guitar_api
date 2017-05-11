class PlayerSerializer < ActiveModel::Serializer

  attributes :id, :guitar_id, :name, :email, :users_votes_count
  attribute :user_voted

  has_many :users_votes

  def user_voted
    if scope[:current_user]
      object.users_votes.any?{|vote| vote.user_id == scope[:current_user].id}
    end
  end
end
