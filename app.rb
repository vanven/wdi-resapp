require 'sinatra'
require 'mongoid'
require 'oj'
require "sinatra/reloader" if development?

Mongoid.load!("mongoid.yml")

# there's a Document.rb inside a folder called Mongoid
class Doc                                # In Ruby, all classes start capitalized. 
  include Mongoid::Document                    # (not a good idea to use accents or predesignated words)
                                            # Ruby assumes that a capitalized word is a constant, lower case for methods etc.
  field :name_first, type: String
  # field :name_middle, type: String
  field :name_last, type: String
  field :phone, type: String
  field :email, type: String
  field :linked_in, type: String
  field :website, type: String
  field :twitter, type: String

  embeds_many :street_address
end

class StreetAddress
    include Mongoid::Document

  field :street,   type: String
  field :city,     type: String
  field :state,    type: String
  field :zip_code, type: String

  embedded_in :doc                # :symbol must be in snake_case. if you capitalize, ruby thinks class.
end

# retrieves all of the json data
get '/' do              # copy-pasted this from old file because it's Boilerplate
  content_type :json    # controls content_type in browser/console 
  
  docs = Doc.all
  
  docs.to_json
end

# get '/51d2fc9b1b128c099100001f' do
#   "Hello World"
# end


# retrieves a specific id number
get '/:id' do              
  content_type :json     
  
  docs = Doc.find params[:id]       # .find is a class method
  
  docs.to_json
end

# get '/new'




# implement POST, PUT, and DELETE

# create
post '/' do
    content_type :json

    data = JSON.parse(request.body.read)["resume"]
    doc = Doc.create!(data)
    doc.to_json
    # x = {success: true, message: "Added resume id = #{id}" }.to_json
    # puts x
end

# # update
put "/:id" do
  content_type :json

  data = JSON.parse(request.body.read)["resume"]
  doc = Doc.find params[:id]
  doc.update_attributes!(data)
  
end

# # destroy
delete '/:id' do
  content_type :json

  Doc.find(params[:id]).destroy   # Beware of case! I had DOC instead of Doc.
  status 204
end






