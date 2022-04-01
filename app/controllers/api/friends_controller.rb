class Api::FriendsController < ApplicationController 
    def index
        @friends = Friend.all
        render :index
    end

    def create
        @friend = Friend.new(user_id: current_user.id, friend_id: params[:sender_id])
        @user = Friend.new(user_id: params[:sender_id], friend_id: current_user.id)
        @friend_request = FriendRequest.find_by(id: params[:id])

        if @friend.save && @user.save
            @friend_request.destroy
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend = Friend.find_by(id: params[:id])
        @user = Friend.find_by(user_id: @friends.friend_id, friend_id: current_user.id)

        if @friend.destroy && @user.destroy
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    private

    def friend_params
        params.require(:friend).permit(:user_id, :friend_id)
    end
end