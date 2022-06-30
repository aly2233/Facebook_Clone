class Api::FriendRequestsController < ApplicationController
    before_action :require_logged_in

    def create
        @friend_request = FriendRequest.new(friend_request_params)
        @friend_request.sender_id = current_user.id

        if @friend_request.save
            render :show
        else
            render json: @friend_request.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend_request = FriendRequest.find_by(id: params[:id])

        if @friend_request.destroy
            render :show
        else
            render json: @friend_request.errors.full_messages, status: 422
        end
    end

    private
    def friend_request_params
        params.require(:friend_request).permit(:sender_id, :receiver_id)
    end
    
end