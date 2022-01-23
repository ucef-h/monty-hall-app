## Install

Run `docker-compose build`

Run `docker-compose up -d`

The above will `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Access the container

Run  `docker-compose exec app bash` 

## Access CLI 

Run `npx -p @angular/cli`

## Generate Component 

 Run `npx -p @angular/cli ng g c recipes --skipTests true`

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Lint

Run `npx -p @angular/cli ng lint`

RUN `npx -p @angular/cli ng lint --fix` To fix some issues

`lint` command will execute `ESLint` and `Prettier` rules from AirBnB Styleguide.

## Build for peoducion 

Run `npx -p @angular/cli ng build --prod`

## Test

RUN `docker build -t app-test .`
THEN
RUN `docker run --rm app-test npm run test:ci`

need to build when test change 

