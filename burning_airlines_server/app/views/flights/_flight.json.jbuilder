json.extract! flight, :id, :flight_name, :origin, :destination, :date, :plane_id, :created_at, :updated_at
json.url flight_url(flight, format: :json)
