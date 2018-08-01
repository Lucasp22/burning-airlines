class AddSeatsToPlanes < ActiveRecord::Migration[5.2]
  def change
    add_column :planes, :seats, :integer 
  end
end
