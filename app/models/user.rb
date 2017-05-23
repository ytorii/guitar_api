class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable
          #:confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  name_length = 4..20

  validates_uniqueness_of :nickname
  validates_presence_of :nickname, :name
  validates_length_of :name, :nickname, within: name_length
end
