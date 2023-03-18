class Api::V1::PostsController < ApplicationController
  def index
    posts = Post.all
    render json: posts, status: :ok
  end
end
