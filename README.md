# Gl4

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="200"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## How to contribute to this ?
1- **clone the repo**
```
git clone https://github.com/ansnoussi/GL4_Projet_Gestion_PFE.git && cd GL4_Projet_Gestion_PFE
```
2- **go to the branch of your choice ('frontend' or 'backend')**
```
git checkout backend
```
3- **always make sure you have the latest changes**
```
git pull
```
4- **do your work** <br>
5- **commit and push the work**
```
git add .
git commit -m "a meaningful name"
git push
```

## Import the shared api interfaces
All api interfaces are defined in the package `libs/api-interfaces`
- example import :
```
import { CreateUserDto, LoginUserDto } from "@gl4/api-interfaces"
```


## Run the Angular app
Run `ng serve pfe` to run the angular app locally on http://localhost:4200/.

## Run the Nest app
Run `ng serve api` to start the Nest server locally on http://localhost:3333/api.

⚠ *Important* : so that we don't run into any CORS issues while developing, a proxy configuration is set to proxy requests to http://localhost:4200/api to the NestJS server.

⚠ *Important* : a mongodb instance is needed, you can have one easily wih docker :

```
docker run --name projet-gl4-mongo -p 27017:27017 -d mongo:latest
```

## Run the whole stack
Run `npm run dev` to start the Nest app and the Angular app concurrently.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> I have already generated the api-interfaces library containing the modals used in our app.

Libraries are sharable across libraries and applications. They can be imported from `@gl4/mylib`.


## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.
In our case we have 2 apps that we work on: 
- api
- pfe

## [API Documentation (google drive)](https://docs.google.com/document/d/1DXMlNhXRMlfBhapSvZWi-8lfLtIMzSMKtFPTV8YO4ek/edit?usp=sharing) 

## [Cahier des charges (google drive)](https://docs.google.com/document/d/1-aJ2ZDoRYtF6gIIW117Xa49l_KhE_5aikEq4YYEdGLA/edit?usp=sharing) 

