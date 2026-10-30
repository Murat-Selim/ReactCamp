# React Camp — Product and Cart Exercises

A React learning application with product listing/detail pages, a product form, cart state, and routing.

## Stack

React 17, Create React App 4, Redux, React Router 5, Axios, Formik/Yup, and Semantic UI React.

## Local setup

Use a Node.js/npm environment compatible with the project's legacy React Scripts version.

```sh
git clone https://github.com/Murat-Selim/ReactCamp.git
cd ReactCamp
npm install
npm start
```

Open the local URL printed by the development server, normally `http://localhost:3000`.

Product data is loaded through `src/services/productService.js`, which targets `http://localhost:8080/api/products/`. A compatible backend must run separately, or those URLs must be adapted to your API. Starting the React server alone does not provide product data.

## Structure

- `src/pages/`: product and cart pages.
- `src/layouts/`: navigation, categories, dashboard, and cart summary.
- `src/services/`: API requests.
- `src/store/`: Redux actions and reducers.

## Validation

```sh
npm test
npm run build
```

The test command starts React Scripts' interactive test runner. This is a learning repository; generated tests are not comprehensive application coverage.

## License

No repository-wide license file is currently declared. Preserve original course and third-party notices.
