class GuitarSerializer < ActiveModel::Serializer
  attributes :id, :name, :maker

  has_many :players
end
