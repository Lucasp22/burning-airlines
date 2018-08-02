Rails.application.routes.draw do

  post "/flights" => "flights#create"
  post "/planes" => "planes#create"

  resources :reservations
  resources :users
  resources :flights
  resources :planes

end
