post '/user/accreated' do
  @user = User.create!(name: params[:name], email: params[:email], password: params[:password])
  erb :accountcreated, layout: false
end

post '/user/authenticate' do
  p "??"*50
  p params
  # user = User.authenticate(email: params[:email], password: params[:password])  
  user = User.authenticate(params[:email], params[:password])  
  if user
    p "INSIDE IF USER"
    session[:user_id] = user.id
    "true"
  else
    nil
  end
end