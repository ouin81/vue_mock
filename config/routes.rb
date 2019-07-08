Rails.application.routes.draw do
  resources :books
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'common/i18n'
  post 'common/change_locale'
  root "home#index"
end
