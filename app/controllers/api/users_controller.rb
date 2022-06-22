class Api::UsersController < ApplicationController
    before_action :require_logged_in, except: [:create]
    
    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end
    
    def create
        @user = User.new(user_params)
    
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = current_user
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors, status: 422
        end
    end

    
      private
    
    def user_params
        params.require(:user).permit(:id, :email, :password, :first_name, :last_name, :birthday, :bio, :hometown, :current_town, :relationship, :school, :cover_picture, :profile_picture)
    end
end