class GuitarSerializer < ActiveModel::Serializer
  attributes :id, :name, :maker

  has_many :players, serializer_params: {flag: '1'}
end
