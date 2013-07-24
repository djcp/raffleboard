class CreateRaffles < ActiveRecord::Migration
  def change
    create_table :raffles do |t|
      t.string :name
      t.integer :number_of_tickets

      t.timestamps
    end
  end
end
