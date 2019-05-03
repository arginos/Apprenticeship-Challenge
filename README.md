# Apprenticeship-Challenge
The application is supposed to take a string as a POST request and return every 3rd character of the string. Here is how to test it in terminal:
curl -X POST http://localhost:4444/test --data '{"string_to_cut":"iamyourlyftdriver"}' -H 'Content-Type: application/json'
Desired return: {"return_string":"muydv"}
