class UpdateComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :body, :text, null: false
  end
end
