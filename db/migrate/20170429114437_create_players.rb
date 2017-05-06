class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.references :guitar, foreign_key: true
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end
