class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.integer :number
      t.boolean :drawn
      t.integer :raffle_id

      t.timestamps
    end
  end
end
