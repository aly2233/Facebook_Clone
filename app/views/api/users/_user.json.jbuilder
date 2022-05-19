json.extract! user, :id, :email, :last_name, :first_name, :birthday, :hometown, :school, :bio, :current_town, :relationship
json.coverPicture url_for(user.cover_picture) if user.cover_picture.attached?
json.profilePicture url_for(user.profile_picture) if user.profile_picture.attached?