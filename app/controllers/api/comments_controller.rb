class Api::CommentsController < ApplicationController
    before_action :require_logged_in

    def index
        @comments = Comments.all
        render :index
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 403
        end

    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 403
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:post_id, :commenter_id, :body)
    end

end