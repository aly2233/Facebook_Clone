json.friend do
    json.set! @friend.id do
        json.partial! 'friend', friend: @friend
    end
end

json.user do
    json.set! @user.id do 
        json.extract! @user, :id, :user_id, :friend_id
    end
end

if @friend_request
    json.request do
        json.set! @request.id do
            json.partial! 'api/friend_requests/friend_request', request: @request
        end
    end
end