class UsersVoteSerializer < ActiveModel::Serializer
  attributes :id, :ser_id, :player_id, :amount
end
