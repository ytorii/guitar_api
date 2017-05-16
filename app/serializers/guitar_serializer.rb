class GuitarSerializer < ActiveModel::Serializer
  attributes :id, :name, :maker

  #has_many :players, if: :fetch_players

  def fetch_players
    scope[:fetch_players]
  end
end
