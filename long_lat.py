from geopy.geocoders import Nominatim

# Create a geocoder instance
geolocator = Nominatim(user_agent="location_geocoder")

# List of locations
locations = [
    "Indianapolis, IN, USA",
    "Bloomington, IN, USA",
    "Chicago, IL, USA",
    "Pictured Rocks, MI, USA",
    "Louisville, KY, USA",
    "Mammoth Cave, KY, USA",
    "Niagra Falls, NY, USA",
    "Buffalo, NY, USA",
    "New York City, NY, USA",
    "Boston, MA, USA",
    "Montpelier, Vermont, USA",
    "Concord, NH, USA",
    "Augusta, ME, USA",
    "Philadelphia, PA, USA",
    "Nashville, TN, USA",
    "Memphis, TN, USA",
    "Gatlinburg, TN, USA",
    "Cincinnati, OH, USA",
    "Columbus, OH, USA",
    "Atlanta, GA, USA",
    "Savannah, GA, USA",
    "Jacksonville, NC, USA",
    "Washington, DC, USA",
    "Richmond, VA, USA",
    "Miami, FL, USA",
    "Key West, FL, USA",
    "Birmingham, AL, USA",
    "Jackson, MI, USA",
    "Tupelo, MI, USA",
    "Hot Springs, AR, USA",
    "Houston, TX, USA",
    "Oklahoma City, OK, USA",
    "Santa Fe, NW, USA",
    "White Sands, NW, USA",
    "Phoenix, AZ, USA",
    "Sedona, AZ, USA",
    "Tucson, AZ",
    "Grand Canyon Village, AZ, USA",
    "Las Vegas, NV, USA",
    "Boulder, CO, USA",
    "Denver, CO, USA",
    "Salt Lake City, UT, USA",
    "Los Angeles, CA, USA",
    "San Francisco, CA, USA",
    "Seattle, WA, USA",
    "Berlin, Germany",
    "Warsaw, Poland",
    "Moscow, Russia",
    "Bangkok, Thailand",
    "Beijing, China",
    "Tokyo, Japan",
    "Kuala Lumpur, Malaysia",
    "Singapore, Singapore",
    "Bali, Indonesia",
    "Seoul, South Korea",
    "Hanoi, Vietnam",
    "Krong Siem Reap, Cambodia",
    "Phnom Penh, Cambodia",
    "Belize City, Belize",
    "Flores, Guatemala",
    "Guatemala City, Guatemala",
    "Mexico City, Mexico",
    "Bogota, Colombia",
    "La Paz, Bolivia",
    "Uyuni, Bolivia",
]

# Initialize a list to store location information
location_info = []

# Geocode each location
for location in locations:
    location_data = geolocator.geocode(location)
    if location_data:
        location_name = location_data.address
        latitude = location_data.latitude
        longitude = location_data.longitude
        location_info.append({'name': location, 'coords': [latitude, longitude]})

# Print the formatted location information
for info in location_info:
    print(info,',')