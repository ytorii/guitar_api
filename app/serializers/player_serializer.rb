class PlayerSerializer < ActiveModel::Serializer

  attributes :id, :guitar_id, :name, :group, :votes_count
  attribute :user_voted

  def user_voted
    if scope[:current_user]
      scope[:user_votes].any?{ |vote|
        (vote.user_id == scope[:current_user].id) && (vote.player_id == object.id)
      }
    end
  end
end
