Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
        resources :users, only: [:create, :destroy, :show, :index, :update]
        resource :session, only: [:create, :destroy]
        resources :posts, only: [:index, :create, :destroy, :update, :show]
        resources :friends, only:[:index, :create, :destroy]
        resources :friend_requests, only: [:create, :destroy]
        resources :likes, only: [:create, :destroy]
        resources :comments, only: [:index, :update, :create, :destroy]
    end
    root to: "static_pages#root"
end
