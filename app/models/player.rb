class Player < ApplicationRecord
  belongs_to :guitar
  has_many :votes

  validates :name,
            presence: true,
            length: { minimum: 1, maximum: 20, allow_blank: false }
  validates :group,
            length: { minimum: 1, maximum: 20, allow_blank: true }
end
