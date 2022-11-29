Frontend Take-Home Exercise
Your task is to build a webpage with a user creation form. The form should take the following required inputs:

Full Name
Email
Password
Occupation
State
Occupation and State should allow users to select from options returned by an endpoint. Users should only be able to select one occupation and one state. A GET request to https://frontend-take-home.fetchrewards.com/form will return a JSON body with the following format:

{
    "occupations": [
        "occupation1",
        "occupation2",
        ...
    ],
    "states": [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        ...
    ]
}
You should submit the results of the form to the same endpoint (https://frontend-take-home.fetchrewards.com/form) via a POST request with a JSON body of the following format:

{
    "name": "???",
    "email": "???",
    "password": "???",
    "occupation": "???",
    "state": "???"
}
The POST endpoint will return a 201 status code if all fields are provided. The response body will be the created user object. It does not perform any validation beyond this.

Minimum Requirements
Your site must:

Display a form with inputs for each field outlined above
Allow a user to complete and submit the form
Do not allow form submission without completing the entire form
Provide feedback upon successful form submission
You may complete this exercise using any languages or frameworks you'd like.

How do I submit it?
Please submit to the Greenhouse submission link provided by your recruiter.

How will this exercise be evaluated?
An engineer will review the code you submit. You will be evaluated based on:

Code quality
Use of best practices
Fulfillment of minimum requirements
Site usability/UX
You should provide any necessary documentation within the repository.

Can I provide a private repository?
If at all possible, we prefer a public repository because we do not know which engineer will be evaluating your submission. If you are still uncomfortable providing a public repository, you can work with your recruiter to provide access to the reviewing engineer.

How long do I have to complete the exercise?
There is no time limit for the exercise. Out of respect for your time, we designed this exercise with the intent that it should take you a few hours. However, you may take as much time as you need to complete the work. If you are able to complete the minimum requirements fairly quickly, we recommend spending some additional time improving upon your submission in any ways that you see fit.

For any further questions or clarifications, please reach out to your recruiter.

========

Some aspects of what our team looks for in the code exercise:

Great presentation 
Clean Repo with well written readme
Good application structure
Highly Important Information Below:

If you cannot begin working ASAP - Please apply only once you can
This is not a summer apprenticeship - we are hiring for today 
We are looking for candidates with a foundational knowledge about JavaScript and FE web development
$40 per hour
Hours: Monday-Friday 9am-5pm CST
Hybrid/remote environment (1-2 days a week in the office) 
Items we look for in FE candidates:

Strong grasp of AWS 
Architecture fundamentals 
FE standards 
Okta experience
Experience acting as a full stack engineer with independent motivations and execution

=======

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
