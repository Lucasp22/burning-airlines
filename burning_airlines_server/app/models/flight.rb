class Flight < ApplicationRecord
  belongs_to :plane, :optional => true
  # has_many :reservations, :optional => true
  has_many :reservations
  # has_many :reservations, :optional => true
end
