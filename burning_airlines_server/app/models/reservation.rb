class Reservation < ApplicationRecord
belongs_to :flight, :optional => true
belongs_to :user, :optional => true
end
