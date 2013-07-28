Raffleboard::Application.routes.draw do

  resources :raffles, only: [:index, :show]
  resources :tickets, only: [:update]

  namespace :admin do
    resources :raffles, only: [:index, :show]
  end

  root to: 'raffles#index'
end
