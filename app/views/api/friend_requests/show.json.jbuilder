json.set! @friend_request.id do
    json.partial! 'friend_request', friend_request: @friend_request
end