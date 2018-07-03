class Api::TodosController < ApplicationController

def show
  render json: Todos.find(params[:id])
end

def create
  @todo = Todos.new(todos_params)
  if @todo.save
    render json: @todo
  else
    render json: @todo.errors.full_messages, status: 422
  end
end

def update
  @todo =  Todos.find(params[:id])
  if @todo
    render json: @todo
  else
    render json: @todo.errors.full_messages, status:422
  end
end

def destroy
  @todo =  Todos.find(params[:id])
  @todo.destroy
  render json: @todo
end

def index
  @todos = Todos.all
  render json: @todos
end

private

def todos_params
  params.require(:todo).permit(:title,:body,:done)
end

end
