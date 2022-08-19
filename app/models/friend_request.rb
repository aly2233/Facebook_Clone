class FriendRequest < ApplicationRecord
    validates :sender_id, :receiver_id, presence: true
    validates :sender_id, uniqueness: { scope: :receiver_id }

    belongs_to :sender,
    foreign_key: :sender_id,
    class_name: :User

    belongs_to :receiver,
    foreign_key: :receiver_id,
    class_name: :User




    # add
end