# myBlog - 基本功能及特色介紹

### 一、「全域特殊設計」
- #### 使用 CSS Animation，當 Ajax 寫入時，做到淡入效果
- #### 作品集選單 Hover 時有 Filter 及說明文字特效
- #### 將課堂作業整合在同一個模板上，不會跳轉到其他頁面
- #### 手機上排版和顯示不會出錯（遊戲Canvas除外）

<br />  

### 二、「今天晚餐吃什麼？」
- #### 可讓使用者自訂選項
- ####  抽籤時閃爍動畫（`Ajax`、`Interval`）
- #### 流暢操作流程（可以返回繼續新增選項）
- #### 錯誤提示（檢查是否有三個以上之選項，以及是否在最後有多餘的換行）

<br />  

### 三、「RPG破關小遊戲」(如無法正常顯示，請重新整理)
- #### 以兒時復古遊戲為出發點，依照自己的能力用網站呈現
- #### 以課堂元素為基底，更換主角、敵人、障礙物的樣式，讓整體更有特色。
- #### 目標為蒐集各種物件，取得一個物件即得一分，但要小心不要觸碰到移動之敵人
- #### `Math.random()` 隨機處理「敵人移動秒數」及「物件產生」，每次開場都是不同的樣貌
- #### 蒐集完所有物品（即滿分）時，走到終點才算過關
- #### 自動計時，過關時顯示通關時間，可以挑戰自己的高分！！！
- #### 花費許多時間設計移動的敵人，還有死亡的判讀，盡量不讓誤判的情況發生
- #### 下方對話框依照狀況顯示提示語句，讓玩家更清楚遊戲要求

<br />  

### 四、「YouTube心情點播」
- #### 自動播放，一鍵即可快速播放及切換曲目
- #### 播放器置中，並且隨著視窗大小自動調整寬度
- #### 在Player Ready時自動調整高度（JavaScript），讓播放器比例為16:9，避免錯誤比例
- #### 每三首歌就穿插一次「[Surprise](https://zh.wikipedia.org/wiki/%E7%91%9E%E5%85%8B%E6%90%96)」，聽完心情肯定是超好的
- #### 曲風跨越各年代、類型，給你大幅的心情轉換，還有聽、視覺上的驚喜和衝擊

<br />  

# 個人其他作品簡介
> ### 請注意：以下作品皆使用個人伺服器並使用 ngrok 產生暫時網址，並使用此伺服器協助跳轉。所以使用請不用儲存 ngrok 暫時網址，而是使用此伺服器之重新導向服務協助跳轉。
### 一、「共同特色」
- #### 大量使用MySQL、PHP、Ajax
- #### 自行設計整體頁面風格，以及編寫所有CSS，著重於配色調校
- #### 流暢的操作流程，盡量簡化操作步驟，使用者友善<br /><br />
## 1 -「To Do List 待辦事項」
#### 1. 申請帳號並登入，即可建立、編輯個人To Do List
#### 2. 設定完成日期，當日必完成之項目會變成紅色
#### 3. 編輯時，直接以 Ajax 在該項目上產生編輯框，不需跳至其他頁面<br /><br />
## 2 -「通識衝堂比對查詢系統」
> ### 此作品由 1101548 陳蓉萱、1101413 陳品妤、1103315 劉承軒與我合力共同完成
<div style="background-color: #E9E9E9; font-size: 1.1em; padding: 1.5em; border-radius: 5px;"><span style="font-size: 1.2em;">系統目的：</span><div style="margin-top: 0.5em;padding-left:2em;"><span style="padding-left: 2em;">選課時，我們通常會將系上的必、選修先選完，再去選通識課程。然而「全校課程查詢系統」無法依照個人課表進行篩選。為了避免衝堂，我們必須在"查詢系統"與"課表"間切換，依照自己沒課的時段來選擇。但常常會遇到想選的課全部衝堂的狀況，我們就得再滑到頁面最上端，重新查看還有什麼課是自己有興趣且可選的。這些動作往往耗費我們大量時間。本系統可以快速的篩選出未衝堂的通識課程，有效提高選課效率。</span></div></div> 

    #### 1. 建立個人帳號，申請帳號後自動登入，並自動導向建立課表之頁面
    #### 2. 簡潔首頁畫面，淺顯易懂之圖示及文字說明，操作直覺，從首頁分別可進入"編輯課表"及"課程查詢"功能
    #### 3. 編輯課表以`checkbox` 方式呈現，並以csv格式存於後端
    #### 4. 課程分成四大類，可分類查詢，也可查詢全部，按下搜尋鍵後自動篩選掉衝堂之時段
    #### 5. Google按鈕：可以一鍵連到Google查詢課程評價。不須花費時間打字
    #### 6. 2022/4月更新：新增[Update網頁](./updateData.html)，從 Portal API 獲取課程 `.json` 並精簡成系統可用之CSV，管理員可更輕鬆的更新課程清單<br /><br />
## 3 -「點餐管理系統」
> ### 此作品為本學期個人完成，<i>預計作為本課期末專題</i>
<div style="background-color: #E9E9E9; font-size: 1.1em; padding: 1.5em; border-radius: 5px;"><span style="font-size: 1.2em;">系統目的：</span><div style="margin-top: 0.5em;padding-left:2em;">現今點餐系統（POS機）已經是餐廳不可或缺的一部分；但除了在麥當勞或是春水堂這些大企業之外，很少在普通餐廳看到整合優良的點餐流程和系統。很多小餐廳的運作方式都是：在櫃台擺設一台點餐機，接下來就靠印出紙本單，或是將訂單以口頭唸出的方式，來通知廚房製作人員需要製作哪些餐點。但這樣既不方便，也不環保（不衛生）。為了解決以上種種問題，我決定用網站程式的形式實行點餐系統。這樣就可以不限作業系統，在多裝置執行，你只需要一個內網Server主機、一個路由器、以及Browser。<span style="padding-left: 2em;"></span></div></div> 

    #### 1. 以新視窗方式開啟，看起來更像App而不是網站
    #### 2. 在首頁選擇身份別，進入三種不同功能的畫面，分別是：點餐人員（櫃台）、製作人員（廚房）、送餐人員（服務生）
    #### 3. 排版也支援手機，服務生到桌邊用手機點餐也是OK的！沒有裝置限制
    #### 4. `custom_settings.js` 檔案含有所有可自訂的選項（菜單、價格、通知音效等等），自訂性高。
    #### 5. 2022/4/27更新：新增歷史訂單查詢功能，可查看、刪除歷史訂單，也可輕鬆計算總收入
    > 一、「點餐頁面特色」
    #### 1. 流程簡易，依照狀況顯示指示文字，畫面依步驟以 PHP 及 Ajax 改變
    #### 2. 內用可選擇桌號，而外帶則是自動產生 1~100 的編號，100號後自動歸零
    #### 3. 輕點菜單立刻新增餐點，也可在 Order List 按 `+` 或 `-` 來修改數量
    #### 4. Order List 自動 highlight 正在編輯的項目，在雜亂的訂單中清楚顯示
    > 二、「接單頁面」＆「送餐頁面」特色
    #### 1. 使用 `PHP` 連線 `MySQL` ，並使用 `Interval` 來即時更新訂單
    #### 2. 在有新訂單時立刻發出通知音效（僅電腦版支援）
    #### 3. 顯示界面仿造紙本單形式，放大字體，淺顯易讀
    #### 4. 「內用」與「外帶」訂單以顏色區分，可以快速得知類型，避免做錯
    #### 5. 因製餐人員通常很忙，且為了衛生，要減少觸碰螢幕的次數，系統會自動將過長的訂單拆為多份（不用捲動來查看）
    > 三、「歷史訂單查詢」（2022/4月新增之功能）
    #### 1. 依照歷史訂單計算總收入，紀錄變更時重新計算收入
    #### 2. 可刪除單一訂單紀錄，也可選擇刪除全部紀錄。刪除前跳出確認視窗
    #### 3. 分內用與外帶兩類查詢，可查看訂單日期及確切時間，並由新到舊排序