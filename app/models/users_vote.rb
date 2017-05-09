class UsersVote < ApplicationRecord
  belongs_to :user
  belongs_to :player, counter_cache: true
end
