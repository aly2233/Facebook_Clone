@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :email, :last_name, :first_name, :birthday
    end
end
