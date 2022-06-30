class Post < ApplicationRecord
    belongs_to :poster,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :profile_owner,
    foreign_key: :profile_id,
    class_name: :User

    has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment,
    dependent: :destroy

    has_many :likes, 
    as: :likeable,
    dependent: :destroy

    has_one_attached :post_photo
end

