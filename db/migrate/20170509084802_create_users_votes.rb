class CreateUsersVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :users_votes do |t|
      t.integer :amount
      t.references :user, foreign_key: true
      t.references :player, foreign_key: true

      t.timestamps
    end
  end
end
