module QuestionSeeds
  def self.import(filename=File.dirname(__FILE__) + "/../preguntasprueba.csv")
    field_names = ["question","answer","optionA","optionB","optionC","optionD","category"]
    Question.transaction do
      arre = []
      File.open(filename).each do |line|
        arre << line.chomp.split(",")
      end
      arre.each do |x|
        attribute_hash = Hash[field_names.zip(x)]
        pregunta = Question.create!(attribute_hash)
      end   
    end
  end
end
QuestionSeeds.import

