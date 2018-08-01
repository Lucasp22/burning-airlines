class User < ApplicationRecord
  has_many :reservation, :optional => true
end
