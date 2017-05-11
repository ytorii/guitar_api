class RenameUsersVoteCountToVoteCount < ActiveRecord::Migration[5.1]
  def change
    rename_column :players, :users_votes_count, :votes_count
  end
end
