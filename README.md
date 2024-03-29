# Frontend training

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run it

- `npm install`
- `npm start`

UI URL: `http://localhost:3000/`

## How to test it

- `npm test`
- `npm run cy run` (npx cypress run) : run tests without browser
- `npm run cy open` (npx cypress open) : open cypress in a browser

## Frontend training features

- Last ES6 features
- useState: react to a button
- input event onChange, managing multiple states
- Cross component state - child to parent
- useEffect no dependency: execute at runtime
- useEffect with dependency: login example - run code at runtime and on each keystroke
- useReducer: login example - same than previous but with reducer
- useEffect: load API call at runtime + update on click
- useState, submit form, API call with placeholder, map response with a class
- useReducer: manage big forms
- useContext
- forwardRef: give ref to child
- React.memo: don't call API if same param
- React.memo with useCallback
- React.memo with useMemo
- Class component and ErrorBoundary
- Call API with fetch + async/await
- Router + useHistory
- Redux: basic counter
- Redux toolkit: managing multiple slices
- Responsive CSS: media queries, flex and grid
- Testing: Jest
- Testing: Cypress