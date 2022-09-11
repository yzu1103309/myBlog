#!/bin/bash

curl -H "Authorization: Bearer 2A7G40gmovrdC9x2pjGYsVWGKg0_iq1uPqLS9uHA5roc7cVB" -H "Ngrok-Version: 2" https://api.ngrok.com/endpoints > public_url.json

echo

echo -e "var URL = '$(cat public_url.json | jq -r '.endpoints[].public_url')/';" > /home/wilson/Documents/Hugo/myBlog/js/url.js

echo -e '\e[1;32mUpdated the url.js file successfully!\e[1;37m'

echo

echo New content:
cat /home/wilson/Documents/Hugo/myBlog/js/url.js

echo

read -p $'\e[1;33m[Enter結束程序]\e[1;37m' continue
