json.friend_to_user do
    json.set! @friend.id do
        json.partial! 'friend', friend: @friend
    end
end

json.user_to_friend do
    json.set! @user_to_friend.id do 
        json.extract! @user_to_friend, :id, :user_id, :friend_id
    end
end

if @friend_request
    json.request do
        json.set! @request.id do
            json.partial! 'api/friend_requests/friend_request', request: @request
        end
    end
end