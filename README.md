## 專案環境
- node 12.18.3
- yarn 1.22.10
- react 17.0.2

## 專案下載

```
git clone https://github.com/B10615035/Dcard
```

## 建立環境

進入專案資料夾
```
cd Dcard/
```

### yarn 下載

```
npm install -g yarn
```
### package 下載

```
yarn install
```

啟動專案
```
yarn start
```

## 專案架構
- components
    - App.js : 首頁，可以選擇要呈現所有景點或是各縣市的景點。
    - ChooseCity.js : 若選擇呈現縣市的景點，則需要再選擇要顯示哪個縣市。
    - ScenicSpots.js : 透過 Url 判斷要 request 所有景點或是各縣市的景點，並將 response 的資料呈現在頁面上。
    - ScenicSpotDetail.js : 當點擊景點資訊中的 Read More 按鈕後會顯示該景點更詳細的資訊。
    - NotFound.js : 當輸入錯誤的 Url 時顯示 Not Found 於頁面上。
    - Header.js : 每個頁面上方皆會顯示導航欄以利切換畫面。
- styles
    - 放置所有 components 用到的 css
- constants
    - 放置共用的常數
- images
    - 放置圖片

![image](https://github.com/B10615035/Dcard/blob/master/src/images/architecture.png?raw=true)

## 執行結果
### http://localhost:3000/home 首頁
![image](https://github.com/B10615035/Dcard/blob/master/src/images/home.png?raw=true)

### http://localhost:3000/scenicSpot 全部資訊
![image](https://github.com/B10615035/Dcard/blob/master/src/images/scenicSpot.png?raw=true)

### http://localhost:3000/chooseCity 選擇縣市
![image](https://github.com/B10615035/Dcard/blob/master/src/images/chooseCity.png?raw=true)

### http://localhost:3000/scenicSpot/Chiayi 縣市資訊
![image](https://github.com/B10615035/Dcard/blob/master/src/images/Chiayi.png?raw=true)

### http://localhost:3000/scenicSpot/ChiayiCounty 詳細資訊
![image](https://github.com/B10615035/Dcard/blob/master/src/images/ChiayiCounty.png?raw=true)