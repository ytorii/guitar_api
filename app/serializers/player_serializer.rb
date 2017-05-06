class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :guitar_id, :name, :email
end
