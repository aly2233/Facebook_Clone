@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :author_id, :body, :profile_id, :created_at
        json.commentIds post.comment_ids
        json.likeIds post.like_ids
    end
end

json.likes do
    @posts.each do |post|
        post.comments.each do |comment|
            comment.likes.each do |like|
                json.set! like.id do
                    json.partial! 'api/likes/like', like: like
                end
            end 
        end
        
        post.likes.each do |like|
            json.set! like.id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end
end

json.comments do
    @posts.each do |post|
        post.comments.each do |comment|
            json.set! comment.id do 
                json.partial! 'api/comments/comment', comment: comment
            end 
        end
    end
end