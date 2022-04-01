class UpdatePosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :profile_id, :integer, null: false
  end
end
