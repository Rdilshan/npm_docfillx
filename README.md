<p align="center">
    <img src="https://github.com/Rdilshan/docfillx/blob/main/public/logo.png" width="100%"  alt="logo of docfillx">
</p>

<p align="center">
   docfillx is a lightweight and efficient Node.js library that allows you to seamlessly insert dynamic values into Word template files and download the updated documents. Built with simplicity and versatility in mind, this library is perfect for generating customized Word documents like reports, certificates, or invoices.
</p>

---

[![NPM version][npm-image]][npm-url]
[![Downloads per month][downloads-image]][downloads-url]


# Install the package

- install the library via npm:
```sh
npm install docfillx
```
- Import the handleFile function
In your JavaScript/TypeScript file, import the handleFile function from the package:

```sh
import { handleFile } from 'docfillx';
```
- Place your Word template in the public folder
Ensure your Word template file (.docx) is available in the public folder of your project.

- Prepare the data
Create an object that holds the data you want to insert into the Word template.
```sh
const dataValue = {
  name: "John Doe",
  age: 30,
  data: [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
  ],
};
```
- Call the handleFile function
Pass the Word template file and your data object as arguments to the handleFile function:

```sh
handleFile("template.docx", dataValue);
```
- Download the processed file
The library will replace placeholders in the Word template with the provided data and trigger a download of the updated file.


## Authors

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Rdilshan/docfillx)

[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rdilshan077788@gmail.com)

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white )](https://www.linkedin.com/in/randikadilshanmanamendra/)




[npm-image]: https://badge.fury.io/js/docx.svg
[npm-url]: https://www.npmjs.com/package/docfillx
[downloads-image]: https://img.shields.io/npm/dm/docx.svg
[downloads-url]: https://npmjs.org/package/docfillx
[github-actions-workflow-image]: https://github.com/Rdilshan/docfillx
[github-actions-workflow-url]: https://github.com/Rdilshan/docfillx/actions

