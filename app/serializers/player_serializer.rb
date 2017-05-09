class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :guitar_id, :name, :email, :users_votes_count
end
