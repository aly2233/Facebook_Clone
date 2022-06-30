@users.each do |user|
    json.set! user.id do
        json.partial! 'api/users/user', user: user
    end
end


json.owned_friends do
    @users.each do |user|
        user.owned_friends.each do |friend|
            json.set! friend.id do
                json.partial! 'api/friends/friend', friend: friend
            end
        end
    end
end