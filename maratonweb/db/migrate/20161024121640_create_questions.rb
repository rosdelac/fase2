class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :question
      t.string :answer
      t.string :optionA
      t.string :optionB
      t.string :optionC
      t.string :optionD
      t.string :category
    end
  end
end