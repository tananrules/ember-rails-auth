ember-rails-auth
================
backend -->
  bundle install
  rake db:migrate
  rake db:seed
  rails s
  
  
frontend -->
  npm install --save-dev ember-cli-simple-auth-devise
  ember generate ember-cli-simple-auth-devise
  npm install
  bower install
  ember s --proxy http://0.0.0.0:3000
