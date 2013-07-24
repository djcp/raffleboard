# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :raffle do
    name "MyString"
    number_of_tickets 1
  end
end
