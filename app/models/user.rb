class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable
          #:confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  validates_uniqueness_of :nickname
  validates :name, :nickname,
            presence: true,
            length: { minimum:3, maximum: 20, allow_blank: true }
end
