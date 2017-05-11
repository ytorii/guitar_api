class GuitarSerializer < ActiveModel::Serializer
  attributes :id, :name, :maker

  has_many :players, if: :fetch_players 

  def fetch_players
    scope[:render_associations]
  end

end
