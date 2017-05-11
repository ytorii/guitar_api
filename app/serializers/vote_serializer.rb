class VoteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :player_id
end
