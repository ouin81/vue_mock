class CommonController < ApplicationController
  def i18n
    @locales = Hash.new
    I18n.available_locales.map {|locale| 
        @locales[locale] = I18n.t('.', locale: locale)
    }
  end

  def change_locale
    if I18n.available_locales.include?(params[:locale].to_sym)
      session[:locale] = params[:locale].to_sym
    end
    render json: {locale: session[:locale]}
  end
end
