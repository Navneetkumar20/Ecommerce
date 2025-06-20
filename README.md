
# Ecommerce
>>>>>>> fbf124549f8cef53498119e42ce4ab94bdda6fc

# type of testing
unit testing
integration testing
end to end testing

# Setting up testing in our app
- install react testing library
-install jest(npm i -D jest)
-installed Babel dependencies(jest)
-configure babel(src file=> babel.config.js)
-configure parcel config file to disable  default babel transpilation(src file=>.parcelrc)
- jest configuration(npx create-jest )
-install jsdom library
-Install @babel/prest-react - to make jsx in test case( babel.config.js file=>["@babel/preset-react", {runtime:"automatic"}],)
-Include (npm i -D @babel/preset-react) inside my babel config
- npm i -D @testing-library/jest-dom
    