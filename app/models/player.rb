class Player < ApplicationRecord
  belongs_to :guitar
  has_many :users_votes
end
