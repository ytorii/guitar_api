class RenameEmailToGroup < ActiveRecord::Migration[5.1]
  def change
    rename_column :players, :email, :group
  end
end
