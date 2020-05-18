import Services from "./Services";
import UIType from "./UIType";
import Button from "./Button";

class Main {
  constructor() {
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

    //チェックボックス用のスタイルタグを追加
    Main.addStyleTag(Main.CSS_CHECKBOX);

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
      Object.keys(Services).forEach((service) => {
        if (classInfo[service] == undefined) classInfo[service] = null;
      });
      console.log(classInfo);

      //各サービスのボタンを追加する
      Object.keys(Services).forEach((service) => {
        switch (Services[service].type) {
          case UIType.LINK:
            td.appendChild(new Button(classId, service).getElement());
            break;
          case UIType.CHECK:
            const label = document.createElement("label");
            td.appendChild(label);

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = classInfo[service];
            checkbox.classList.add("checkbox-input");
            checkbox.onchange = () => {
              classInfo[service] = checkbox.checked;
              localStorage.setItem(classId, JSON.stringify(classInfo));
            };
            label.appendChild(checkbox);

            const span = document.createElement("span");
            span.innerText = service;
            span.classList.add("checkbox-parts");
            label.append(span);

            break;
          case UIType.TEXT:
            if (td.classList[0] != "blank") break;

            const text = document.createElement("p");
            if (classInfo[service] == null || classInfo[service] == undefined) {
              text.innerText = "クリックして講義を登録";
              text.onclick = () => {
                classInfo[service] = prompt("講義名を入力");
                text.innerText = classInfo[service];
                localStorage.setItem(classId, JSON.stringify(classInfo));
                text.onclick = null;
              };
            } else {
              text.innerText = classInfo[service];
            }
            td.appendChild(text);
            break;

          default:
            break;
        }
      });
      Object.keys(classInfo).forEach((service) => {});
    });
  }

  private static addStyleTag(css: string) {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = css;
    document.getElementsByTagName("head")[0].appendChild(styleTag);
  }

  private static CSS_CHECKBOX = `
  .checkbox-input{
    display: none;
  }
  .checkbox-parts{
    padding-left: 20px;
    position:relative;
    margin-right: 20px;
  }
  .checkbox-parts::before{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border: 1px solid #999;
    border-radius: 4px;
  }
  .checkbox-input:checked + .checkbox-parts{
    color: #d01137;
  }
  .checkbox-input:checked + .checkbox-parts::after{
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 5px;
    width: 7px;
    height: 14px;
    transform: rotate(40deg);
    border-bottom: 3px solid #d01137;
    border-right: 3px solid #d01137;
  }`;
}

try {
  new Main();
} catch (error) {
  console.log(error);
}
