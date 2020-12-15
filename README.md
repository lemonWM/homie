# homie

project in progress .. 

Application to publish home sells and rents offers.
Based on Nuxt.js & Vue.js SSR App

Client side main features:
- user register & login panel 

 ![alt](https://res.cloudinary.com/donmoqxem/image/upload/v1608062002/github_markdown/Zrzut_ekranu_2020-12-15_o_8.23.02_PM_uwc9kb.png)


- using google map api geolocalization find place and using google maps markdown show items
- opening offers details from markers or list of offers

 ![alt](https://res.cloudinary.com/donmoqxem/image/upload/v1608062248/github_markdown/Zrzut_ekranu_2020-12-15_o_8.24.33_PM_rrlkpd.png)


- for logged user option add to favourite, offer will save. Check user dashbord and you find it here. 

 ![alt](https://res.cloudinary.com/donmoqxem/image/upload/v1608062544/github_markdown/Zrzut_ekranu_2020-12-15_o_8.27.52_PM_nfhxcd.png)


- remove from favourite from user panel > settings 

 ![alt](https://res.cloudinary.com/donmoqxem/image/upload/v1608062659/github_markdown/Zrzut_ekranu_2020-12-15_o_8.50.22_PM_qfybmv.png)
 
 ![alt](https://res.cloudinary.com/donmoqxem/image/upload/v1608062658/github_markdown/Zrzut_ekranu_2020-12-15_o_8.28.29_PM_xlhyhn.png)


- for logged user panel for adding new offer rent&sale, select localization, put some info and description for offer also upload img 

 ![alt](https://res.cloudinary.com/donmoqxem/image/upload/v1608062782/github_markdown/Zrzut_ekranu_2020-12-15_o_8.28.47_PM_geoowk.png)


to do:
- module contact to offer author
- reservation offer module
- user info update (name, mail, change password ect.)


CSS Foundation freamwork Sass style

Backend side main features:

- Express.js
- bcrypt hashing password
- JSON Web Token authorization

Live at: in progress, on free heroku server - wait few second on first run

https://homie-nuxt.herokuapp.com


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
