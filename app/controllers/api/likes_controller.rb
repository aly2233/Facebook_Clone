class Api::LikesController < ApplicationController 
    before_action :require_logged_in

    def create
        @like = Like.new(like_params)
        @like.liker_id = current_user.id

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        if @like
            @like.destroy
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def like_params
        params.require(:like).permit(:likeable_id, :likeable_type)
    end
end