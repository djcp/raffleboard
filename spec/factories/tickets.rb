# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :ticket do
    number 1
    drawn false
    raffle_id 1
  end
end
