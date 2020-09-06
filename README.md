## Github Finder

Source: https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969762#overview

Level: ⭐️

---

### Description

1. Starts with the class-based components
2. Change class-based components to functional components for stateless component (Navbar, UserItem)
3. Store users state in an App level state (Because we don't have the centralised store(like redux, context API))

4. Create App level (users and loading )state and Fetch users (from Github Users API) to the Users Component (pass in as a prop)

5. Search user

- GET /search/users
- [Docs](https://developer.github.com/v3/search/#search-users)

---

### Features

- class-based Component (11)
- defaultProps (10)
- PropTypes : typeChecking (10) / Use it to the functional component (13)
- Store in the classbased component-level state (12)
- Stateless Functional Components(14)

- LifeCycleMethod (14)
  - componentDidMount(){}
- Axios (14)
- Environment Variables (16)

  - process.env.

- Search Username and render them
  - Pass up this.state.text from Search Component to the App.js through props (18)
- Clear Users with Button(19)
- Alert system (20)
  - Render Alert just below the Nav component when submitting the form without any imput.
  - SetTimeout to clear the alert after 3 seconds
- React Router (21)

  - [Docs](https://www.npmjs.com/package/react-router-dom)
  - `npm install --save react-router-dom`
  - `import { BrowserRouter, Route, Link } from "react-router-dom";`

- Get single user from Users component (22) 🔥 🔥 🔥

  - When clicking more, it renders to the '/user/:login'
  - props.match.params.

- Build RepoItem Component(in Repos Component) to render 5 latest repos (24)
  - API (https://api.github.com/users/kjx63/repos#)

---

### Component

- Navbar
- Search
- user
  - UserItem
  - Users

---

### API

- https://api.github.com/users
