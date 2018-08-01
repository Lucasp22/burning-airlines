Plane.destroy_all
plane1 = :name => "747", :row => 58, :column => "4", :seats => 232

plane2 = :name => "787", :row => 24, :column => "4", :seats => 98


Flight.destroy_all
flight1 = Flight.create :flight_name => 'QF01', :origin => "SYD", :destination: => "MEL", :date => "2018-08-02", :plane_id => plane1.id

flight2 = Flight.create :flight_name => 'BA989', :origin => "LDN", :destination: => "SYD", :date => "2018-08-03", :plane_id => plane2.id

flight3 = Flight.create :flight_name => 'QF2', :origin => "SYD", :destination: => "MEL", :date => "2018-08-04", :plane_id => plane1.id

flight4 = Flight.create :flight_name => 'BA977', :origin => "LDN", :destination: => "SYD", :date => "2018-08-06", :plane_id => plane2.id
