class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :player, counter_cache: true
end
