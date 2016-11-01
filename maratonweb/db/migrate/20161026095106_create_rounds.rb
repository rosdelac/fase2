class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |t|
      t.string :category
      t.string :correct
      t.string :incorrect
      t.belongs_to :user
    end
  end
end
