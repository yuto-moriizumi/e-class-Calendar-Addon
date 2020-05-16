class Main {
  constructor() {}
}
try {
  new Main();
} catch (error) {
  console.log(error);
}

try {
  enum SERVICE_TYPE {
    LINK, //ボタンを表示し、新しいタブでリンクを開きます
    CHECK, //チェックボックスを表示します
  }
  const SERVICE_LIST = {
    //サービスのリスト　ここに文字列を追加すると登録できるサービスを増やせる
    zoom: {
      type: SERVICE_TYPE.LINK,
    },
    teams: {
      type: SERVICE_TYPE.LINK,
    },
    duet: {
      type: SERVICE_TYPE.CHECK,
    },
  };

  //「Duetへアクセス」リンクを表題に追加する
  const h4s = document.getElementsByTagName("h4");
  for (let i = 0; i < h4s.length; i++) {
    const element = h4s[i];
    if (element.innerText != "時間割表 (表示する年度/学期を選択)") continue;
    const duetLink = document.createElement("a");
    duetLink.setAttribute("target", "_blank");
    duetLink.setAttribute(
      "href",
      "https://duet.doshisha.ac.jp/gakusei/html/fb/fb010/FB01001G.html"
    );
    duetLink.appendChild(document.createTextNode("Duetへアクセス"));
    duetLink.style.marginLeft = "10px";
    element.appendChild(duetLink);
  }

  //授業カレンダーに各サービスの登録ボタン/アクセスボタンを設置
  const tds = document.querySelectorAll(
    "table.schedule-table > tbody > tr > td"
  );
  let i = 0; //マスのインデックス
  tds.forEach((td) => {
    if (td.getAttribute("valign") != "top" && td.classList[0] != "blank")
      return;
    console.log(td);

    //クラスIDを決定（システムから）
    //別に変数iを使う方式に統一してもいいと思う
    let classId = "None";
    if (td.classList[0] == "blank") {
      //履修登録の無いマスの場合
      classId = i.toString();
    } else {
      //履修登録がある場合
      //td内のaタグのリンクから生成
      classId = td.getElementsByTagName("a")[0].href.split("/")[5];
    }
    i++;

    //localStorageからデータ取得
    let classInfo = JSON.parse(localStorage.getItem(classId));
    if (classInfo == null) classInfo = {};

    //データ形式の整合性を取る
    Object.keys(SERVICE_LIST).forEach((service) => {
      if (classInfo[service] == undefined) classInfo[service] = null;
    });
    console.log(classInfo);

    //各サービスのボタンを追加する
    Object.keys(classInfo).forEach((service) => {
      const link = classInfo[service];
      //サービスへのリンクを追加
      if (link == null) {
        //未登録の場合
        const button = createButton(service + "登録", () => {}, "lightgray");
        button.onclick = () => {
          const url = prompt(service + "のURLを入力");
          classInfo[service] = url;
          localStorage.setItem(classId, JSON.stringify(classInfo));
          button.remove();
          td.appendChild(
            createButton(
              service + "アクセス",
              () => openTab(classInfo[service]),
              "lightgreen"
            )
          );
          return;
        };
        td.appendChild(button);
      } else {
        //登録済みの場合
        td.appendChild(
          createButton(
            service + "アクセス",
            () => openTab(classInfo[service]),
            "lightgreen"
          )
        );
      }
    });
  });
} catch (error) {
  console.log(error);
}

function openTab(url) {
  const link = document.createElement("a");
  link.setAttribute("target", "_blank");
  link.setAttribute("href", url);
  link.click();
  return;
}

function createButton(text, callback, bgColor) {
  const button = document.createElement("button");
  //button.type = "button";
  button.innerText = text;
  button.style.backgroundColor = bgColor;
  button.onclick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    callback();
  };
  return button;
}
