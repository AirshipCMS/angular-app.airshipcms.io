# Angular Tutorial
**Complete the Airship Schema tutorial before starting this Angular Tutorial.** This Angular Tutorial explains how Angular was set up and used to render the pages and collections for this application.

## 1. Create Angular App
This app was bootstrapped with Angular CLI.
If you don't have this installed globally, run:
```
npm i -g @angular/cli`
```

Once installed, run the following:
```
ng new angular-app
```
This will create a directory called `angular-app` with the initial project structure.

## 2. Airship Login and Airship Land
Go into `angular-app` and login to your Airship site.
```
airship login angular-app
```
Then run:
```
airship land
```
This will add the folders required to serve and deploy your Airship project.

## 3. Eject the Angular App
We need to eject the angular app so that we can update the webpack config file.
To do so, run:
```
ng eject --e prod
```

## 4. Update the Webpack Config
In `webpack.config.js` set output's path to `compartments/assets/angular-app`:

```
"output": {
  "path": path.join(process.cwd(), "compartments/assets/angular-app"),
  ...
}
```
This builds our Angular app into `compartments/assets/angular-app` so that it can be deployed by Airship.

Add a new instance of `HtmlWebpackPlugin` to plugins. Set `template` to `./src/index.html` and set `filename` to `../../templates/root.html`:

```
new HtmlWebpackPlugin({
  "filename": './index.html',
  "template": "./src/index.html",
}),
new HtmlWebpackPlugin({
  "template": "./src/index.html",
  "filename": "../../templates/root.html",
  ...
```

When we build our app, this will compile `./src/index.html` into `compartments/templates/root.html`.

## 5. Bind Page and Collection Data
To display page and collection content, you will need use the Airship API.

### Display Page Content using Airship API
Make a GET request to`https://yoursite.airshipcms.io/api/pages/page-name`. 
For the `__root__` page in this repo, the full GET request URL is: 
```
https://yourdomain.airshipcms.io/api/pages/__root__
```

`/src/app/setup/setup.service.ts`:
```
getPage() {
  return this.http.get('https://angular-app.airshipcms.io/api/pages/__root__')
    .toPromise()
    .then(res => res.json())
    .catch(err => err.json());
}
```

In the response object, you will see an array name `fields`. This array contains an object for each field associated with the page.

The `__root__` page container a "Github" field, "Description" field, and a "Body" field. The `Airship Schema` page, `Angular Tutorial` page and `Styling` page all have a "Body" field.

Each field contains these properties:
```
num_options: int
options: []
sorting_position: int
title: string
type: string
value: string
variable_name: string
```

The `value` property is what you will bind to your templates.

Because the "Body" field's type contains HTML, it needs to be sanitized with Angular's `DomSanitizer`.
Import `DomSanitizer` from `@angular/platform-browser`:
`import { DomSanitizer } from '@angular/platform-browser';`

Sanitize html:
```
  ...
  .then(res => {
    this.body = this.sanitizer.bypassSecurityTrustHtml(res.fields.filter((field) => {
      return field.variable_name === 'body';
    })[0].value);
    ...
```

Then bind the field with `innerHTML`:

```
<div class='body' [innerHTML]="body"></div>
```

### Display Collection Content using Airship API
Make a GET request to `/api/aerostat_collection/collection-permalink`. 
For the `elements` collection in this repo, the full GET request URL is: 
```
https://yourdomain.airshipcms.io/api/pages/__root__
``` 

This will return an array of items.

Each item contains a number of properties. The `fields` array is the only property used in this demo. The `fields` for the `elements` collection are "Name", "Image", and "Description".

The response object structure is same as Page Fields, where each field contains these properties:
```
num_options: int
options: []
sorting_position: int
title: string
type: string
value: string
variable_name: string
```

Set `this.elements` to the response object.

`/src/app/elements/elements.component.ts`:
```
getElements() {
  this.service.getCollection()
    .then(res => {
      this.elements = res.map((element) => {
        element.fields.forEach((field) => {
          element[field.variable_name] = field.value;
        });
        return element;
      });
    }).catch(err =>{
      throw err;
    });
}
```

In your template, display the "name" and "image" of each element by using Angular's `*ngFor`:

```
<div class='columns' *ngFor='let element of elements; let i = index' ng-if='i % 4 === 0'>
  <a routerLink='/elements/{{ elements[j]?.id }}' class='column is-3 element' *ngFor='let j of [i, i + 1, i + 2, i + 3]'>
    <div class='card'>
      <div class='card-image'>
        <figure class="image">
          <img src="{{ elements[j]?.image[0].thumbnail_url }}" alt="{{ elements[j]?.image[0].file_name }}">
        </figure>
      </div>
      <div class='card-content'>
        <div class="media-content">
          <p class="title is-4">{{ elements[j]?.name }}</p>
        </div>
      </div>
    </div>
  </a>
</div>
```

## 6. Run the Project

In your terminal, run:
```
npm start
```

This command will start `webpack-dev-server`.
The Angular app will be served at `localhost:4200`.

## 7. Build and Deploy

In order to launch the Angular app with Airship, the app needs to be built.
In your terminal, run:
```
npm run build
```
This will compile the Angular app into `/compartments/assets/angular-app`.
`/src/index.html` compiles into `/compartments/templates/root.html`.

Now that the Angular app has been built into the `compartments` directory, it can be deployed.
To do so, run:
```
airship launch
```

Now that the app is built into the `compartments` directory, you can also serve the app locally by running:
```
airship launch
```

This will start your airship server and run your app at `localhost:9001`. 