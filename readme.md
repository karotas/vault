## It's a vault app.
#### This app mainly used to upload your images privately.
#### Follow the follwing steps.  
##### Make sure you was insatlled node js and git cli.
```batch script
npx create-react-app folder-name
cd folder-name
npm install @mui/material @emotion/react @emotion/styled axios  @mui/icons-material @mui/material @emotion/styled @emotion/react
git clone https://github.com/karotas/vault.git

```

### Import the Apps.jsx file in your App.js file
```jsx
import Apps from "./Apps.jsx"
```
### If you want to use this app in a desktop app follow the below step

``` batch script
cd vault_desktop_app
npm i electron
npm start
```
### If you want to use this app in a PWA app . then follow the below step
<ul style="text-transform:capitalize">

<li >
<b >go to vault_pwa folder</b>
</li>
<li >
<b >copy to the all files inside the vault_pwa folder</b>
</li>
<li >
<b >then go to the react public folder</b>
</li>
<li >
<b >paste to the files there  </b>
</li>
</ul>