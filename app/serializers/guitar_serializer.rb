class GuitarSerializer < ActiveModel::Serializer
  attributes :id, :name, :maker

  has_many :players

  def fetch_players
    scope[:fetch_players]
  end
end
