# Life of Cogs

> A web-app where people can book counselling sessions with listed industry proffessionals

> Note : "It's just a Personal Project"

Built with the *MERN* stack & Redux.
<img width="1792" alt="Screenshot 2021-01-05 at 7 31 20 AM" src="https://user-images.githubusercontent.com/67645175/103598218-16847e00-4f28-11eb-8347-1292473618a3.png">


Live Demo --> [lifeofcogs-app](https://cogsprojectapp.herokuapp.com/)

## Features
- Authentication 
- Authorisation
- List of available Counsellors 
- User Profile with session details
- User Dashboard
- Admin(Superuser) managment
- Admin Dashboard
- Complete process of booking a session to providing personal notes to the respective counsellor and also scheduling date and time

There are also some insignificant features in the app like
>  - after scheduling a session and confirmed from the admin side, the join button will be disable till scheduled time.
> Different dashboards for users and admins



## Demo of the App
https://user-images.githubusercontent.com/67645175/103601656-1b4d3000-4f30-11eb-8a93-3e72a775b0f2.mp4

---


---

### ES Modules in Node

I have used ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file *(not a package)*, be sure to add    `.js` at the end or you will get a "module not found" error

You can also install and setup Babel if you would like


### Env Variables
```
NODE_ENV = 
PORT = 
MONGO_URI = your mongodb uri
JWT_SECRET = 
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```
---
## Future Note 
```
~ Addition of review system 
~ Oauth : Google, Facebook or Github
~ Include users' spotify playlist of songs/podcast in there dashboard with spotify's api
```
