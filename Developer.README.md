# Developer Readme

Here are something that you should know before you start to develop.

## How to start server

```shell
npm run start
```

## How to add a new Component

```shell
npm run add <evp-NAME>
```
For example, `npm run add evp-button`, the `evp-` is must. And the name cannot be same with existing components.

After executing this command, scripts will automatically generate the component files (index.tsx and index.css, the css file will be collected by `src\lib\collect.css`) in its own folder in `src\lib`, the unique demo folder in `src\preview\demos` and a `example.tsx` file in its own demo folder, besides the api table will also be created at `src\preview\apis` folder. After these, a view file will be created in `src\preview`, the example and the api table will be used in this view. After this view file is generated, it will be registered to `src\router\index.tsx` to a new route.

## How to configure left menu

Edit `src\menu\index.tsx`.

## How to configure version quickly

```shell
npm run set:version <NEW VERSION>
```

For example, `npm run set:version 0.0.1`, the version of `package.json` of root folder and lib folder will both be set to `0.0.1`.

Notice the version syntax should be correct like `x.y.z` or `x.y.z-suffix`.

## How to build the lib to dist assets

We have configured to use rollup to complie the library, the relative configs are under lib folder. What you need to do is just run the following command:

```shell
npm run package
```

After this, scripts will copy all files in `src\lib` ( Exclude node_modules ) into `dist` at ROOT folder and start to compile the library. After the compliation, the dist will be ready to publish.

## How to publish the library

```shell
npm run publish
```

Before this, you should check whether the version is correct and the dist is lateset. If not, you can use `npm run set:version` to set the version.

## How to build the Docs website

After you finished editing preview, just:
```shell
npm run build
```
And the static website assets will be ready at docs folder to publish.