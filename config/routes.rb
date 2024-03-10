Rails.application.routes.draw do
  get "webhooks" => 'webhooks#index'
  get "webhooks/token" => "webhooks#token"
  root "pages#home"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
