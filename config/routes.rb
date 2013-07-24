Raffleboard::Application.routes.draw do

  resources :raffles

  root to: 'raffles#index'
end
