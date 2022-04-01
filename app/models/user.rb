class User < ApplicationRecord

    attr_reader :password

    validates :email, :password_digest, :birthday, :session_token, presence: true
    validates :email, uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create, message: "Please enter a valid email address" } 
    validates :password, length: {minimum: 6}, allow_nil: true

    has_one_attached :cover_picture
    has_one_attached :profile_picture

    has_many :posts,
    foreign_key: :author_id,
    class_name: :Post

    has_many :posts_on_profile,
    foreign_key: :profile_id,
    class_name: :Post

    has_many :comments,
    foreign_key: :commenter_id,
    class_name: :Comment

    has_many :likes,
    foreign_key: :liker_id,
    class_name: :Likes

    has_many :owned_friends,
    foreign_key: :user_id,
    class_name: :Friend,
    dependent: :destroy

    has_many :friends,
    through: :owned_friends,
    source: :friend

    has_many :sent_friends,
    foreign_key: :sender_id,
    class_name: :FriendRequest

    has_many :received_friends,
    foreign_key: :receiver_id,
    class_name: :FriendRequest

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end
    
    private
    
    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end
    
    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end
    
end