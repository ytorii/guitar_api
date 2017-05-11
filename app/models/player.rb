class Player < ApplicationRecord
  belongs_to :guitar
  has_many :votes
end
