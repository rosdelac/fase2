get '/' do
  # La siguiente linea hace render de la vista 
  # que esta en app/views/index.erb
  erb :index
end

post '/decks/history' do
  @historyquestions = Question.where(category: 'history')
  erb :historydeck, layout: false
end

post '/decks/sports' do
  @sportsquestions = Question.where(category: 'sports')
  erb :sportsdeck, layout: false
end

post '/decks/films' do
  @filmquestions = Question.where(category: 'films')
  erb :filmsdeck, layout: false
end

post '/decks/music' do
  @musicquestions = Question.where(category: 'music')
  erb :musicdeck, layout: false
end

post '/round/results/history' do
  @user = User.find session[:user_id]
  @historyquestions = Question.where(category: 'history')
  @answers = []
  @correct = 0
  @wrong = 0

  @historyquestions.each do |question|
     @answers << question.answer
   end
  for i in 1..5
    if @answers[i-1] == params["option"]["#{i}"]
      @correct += 1
    else
      @wrong += 1
    end
  end
    round = @user.rounds.create!(category: "history", correct: @correct, incorrect: @wrong)
    erb :_scorescreen, layout: false
end

post '/round/results/sports' do
  @sportsquestions = Question.where(category: 'sports')
  @answers = []
  @correct = 0
  @wrong = 0
  @sportsquestions.each do |question|
     @answers << question.answer
   end
  for i in 1..5
    if @answers[i-1] == params["option"]["#{i+5}"]
      @correct += 1
    else
      @wrong += 1
    end
  end
  erb :_scorescreen, layout: false
end

post '/round/results/films' do
  @user = User.where(user_id: session[:user_id])
  @filmquestions = Question.where(category: 'films')
  @answers = []
  @correct = 0
  @wrong = 0
  @filmquestions.each do |question|
     @answers << question.answer
   end
  for i in 1..5
    if @answers[i-1] == params["option"]["#{i+10}"]
      @correct += 1
    else
      @wrong += 1
    end
  end
  erb :_scorescreen, layout: false
end

post '/round/results/music' do
  @musicquestions = Question.where(category: 'music')
  @answers = []
  @correct = 0
  @wrong = 0
  @musicquestions.each do |question|
     @answers << question.answer
   end
  for i in 1..5
    if @answers[i-1] == params["option"]["#{i+15}"]
      @correct += 1
    else
      @wrong += 1
    end
  end
  erb :_scorescreen, layout: false
end