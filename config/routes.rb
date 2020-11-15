Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :bookings, only: %i[index create destroy update]
    end
  end

  root 'homepage#index'

  get 'homepage/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
