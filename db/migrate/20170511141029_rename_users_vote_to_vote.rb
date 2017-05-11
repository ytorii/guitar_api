class RenameUsersVoteToVote < ActiveRecord::Migration[5.1]
  def change
    rename_table :users_votes, :votes
  end
end
