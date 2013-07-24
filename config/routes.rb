Raffleboard::Application.routes.draw do

  resources :raffles, only: [:index, :show]
  resources :tickets, only: [:update]

  root to: 'raffles#index'
end
