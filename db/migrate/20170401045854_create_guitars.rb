class CreateGuitars < ActiveRecord::Migration[5.1]
  def change
    create_table :guitars do |t|
      t.string :name
      t.string :maker
      t.integer :amount

      t.timestamps
    end
  end
end
