class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.text :flight_name
      t.text :origin
      t.text :destination
      t.date :date
      t.integer :plane_id

      t.timestamps
    end
  end
end
