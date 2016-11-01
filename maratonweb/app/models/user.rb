class User < ActiveRecord::Base  
  has_many :rounds, dependent: :destroy
  validates :name, :presence => true
  validates :email, :presence => true, :uniqueness => true

  def self.authenticate(email, password)
    p "*" * 30
    puts "authenticate"
    if self.exists?(email: email)
      user = self.find_by(email: email)
      if password == user.password then user else nil
      end
    end
    
  end
end