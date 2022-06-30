@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :author_id, :body, :profile_id, :created_at
        json.commentIds post.comment_ids
        json.likeIds post.like_ids
    end
end