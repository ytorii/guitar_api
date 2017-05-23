class Guitar < ApplicationRecord
  has_many :players

  validates :name, :maker,
            presence: true,
            length: { minimum: 1, maximum: 20, allow_blank: false }
end
