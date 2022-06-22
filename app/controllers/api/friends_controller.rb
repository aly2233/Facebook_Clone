class Api::FriendsController < ApplicationController 
    def index
        @friends = Friend.all
        render :index
    end

    def create
        @friend_to_user = Friend.new(user_id: current_user.id, friend_id: params[:sender_id])
        @user_to_friend = Friend.new(user_id: params[:sender_id], friend_id: current_user.id)
        @friend_request = FriendRequest.find_by(id: params[:id])

        if @friend_to_user.save && @user_to_friend.save
            @friend_request.destroy
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend_to_user = Friend.find_by(id: params[:id])
        @user_to_friend = Friend.find_by(user_id: @friends.friend_id, friend_id: current_user.id)

        if @friend_to_user.destroy && @user_to_friend.destroy
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