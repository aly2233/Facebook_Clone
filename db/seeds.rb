# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demoUser = User.create!(email: 'demo@demo.com', password: 'demodemo', first_name: 'Demo', last_name: 'Demo', birthday: '1999-01-01', bio: "I am a demo", hometown: "Demo, Demo", current_town: "Demo, Demo", relationship: "Single", school: "Demo University")
demoUser.cover_picture.attach(io: File.open("app/assets/images/default_cover_picture.png"), filename: "default_cover_picture.png")
demoUser.profile_picture.attach(io: File.open("app/assets/images/default-profile-pic-m.jpg"), filename: "default-profile-pic-m.jpg")