class Apple
    attr_accessor 'color'  # define @color, getter, setter together
end

class ModelController < ApplicationController
	before_filter :find_model

	

	private
	def find_model
		@model = Model.find(params[:id]) if params[:id]
	end
end
