## it's a vault app
#### this app mainly used to upload your images privately  
#### Follow the follwing steps  
##### make sure you was insatlled node js and git cli
```batch script
npx create-react-app folder-name
cd folder-name
git clone https://github.com/karotas/vault.git

```

### import the Apps.jsx file in your App.js file
```javascript
import Apps from "./Apps.jsx"
```
### if you want to use this app in a desktop app follow the below step

``` batch script
cd vault_desktop_app
npm i electron
npm start
```
### if you want to use this app in a PWA app . then follow the below step
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