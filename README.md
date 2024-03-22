# 📚 Ext JS 개발 가이드 목차 🌟

- 🌈 [Ext JS 기본 컴포넌트 가이드](#🌟-ext-js-기본-컴포넌트-가이드-🌈)
    - 📝 [Ext JS 컴포넌트 기본 소개](#🛠-기본-컴포넌트-소개-🎯)
- 📄 [Ext JS 예제 페이지 기본 구조](#📖-ext-js-페이지-기본-구조-📄)
    - 🔍 [Ext JS 애플리케이션의  예제 (index.html) HTML 구조 설명](#📑-ext-js-애플리케이션의-indexhtml-html-구조-설명-🌟)
- 💡[Ext JS 애플리케이션 예제 코드(index.js) 분석](#🌟ext-js-애플리케이션-예제-코드indexjs-분석-📘)
---

# 🌟 Ext JS 기본 컴포넌트 가이드 🌈

### Ext JS는 방대한 UI 컴포넌트 라이브러리를 제공하며, 이는 개발 과정에서 필수적인 자산입니다. 여기서는 Ext JS에서 제공하는 주요 기본 컴포넌트들을 소개하고, 실습 준비 방법에 대해 안내합니다. 🚀

# 🛠 기본 컴포넌트 소개 🎯

- **Panel (`Ext.panel.Panel`)**: 🖼 다양한 UI 구성 요소를 담을 수 있는 컨테이너입. 레이아웃 및 이벤트 관리에 최적화.
- **TextField (`Ext.form.field.Text`)**: 📝 사용자로부터 텍스트 입력을 받는 필드. 비밀번호, 이메일 등 다양한 입력 유형을 처리할 수 있음.
- **DateField (`Ext.form.field.Date`)**: 📅 사용자가 날짜를 선택할 수 있는 달력 기반 필드.
- **ComboBox (`Ext.form.field.ComboBox`)**: 🔽 사용자가 드롭다운 목록에서 선택할 수 있는 필드. 사용자 정의 옵션 목록을 제공합니다.
- **Grid (`Ext.grid.Panel`)**: 📊 데이터를 그리드 형태로 표시합니다. 정렬, 필터링 등 다양한 데이터 관리 기능을 지원.
- **Tree (`Ext.tree.Panel`)**: 🌲 계층적 데이터를 트리 구조로 표시하는 컴포넌트.
- **Button (`Ext.button.Button`)**: 🖱️ 사용자 인터랙션을 위한 버튼을 생성합니다. 클릭 이벤트 처리를 통해 다양한 작업을 수행할 수 있습니다.
- **Window (`Ext.window.Window`)**: 🏠 독립적인 윈도우를 생성합니다. 모달 및 비모달 창으로 활용할 수 있음.

## 📚 컴포넌트 사용을 위한 참고 자료

Ext JS 컴포넌트들은 그 기능이 매우 방대하기 때문에, [Ext JS 공식 문서](https://docs.sencha.com/extjs/7.0.0/classic/Ext.form.field.Date.html)에서 필요한 컴포넌트를 검색하고, 그 사용법을 익히는 것이 좋습니다. 🕵️‍♂️

## 🌐 실습 준비하기

1. **폴더 생성**: `C:\WorkspaceExtjs`에 `BasicWidgets` 폴더를 만듦. 📁
2. **필수 파일 복사**: `BasicWidgets`에 CSS 파일과 `ext-all-debug.js` 파일을 복사. 📋
3. **실습 폴더 및 파일 생성**: `BasicWidgets` 내에 `BasicComp` 폴더를 만들고, 이 폴더 안에 `index.html`과 `index.js` 파일을 생성. ✨
4. **VSCode로 작업 공간 열기**: VSCodegit add를 실행하여 `BasicWidgets` 폴더를 열고 실습을 준비. 🖥
---

#  📖 Ext JS 페이지 기본 구조 📄

### HTML 문서의 기본 구조와 함께 Ext JS 라이브러리와 CSS를 포함하는 방법에 대해 알아보자.

## 📑 페이지 구조와 핵심 요소

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="../BasicClassicApp-all.css">
    <script language="javascript" src="../ext-all-debug.js"></script>
    <script language="javascript" src="index.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    
</body>
</html>
```
#  📑 Ext JS 애플리케이션의 (index.html) HTML 구조 설명 🌟

앞서 제공된 HTML 템플릿은 Ext JS 애플리케이션 개발의 기본 출발점. 여기서 사용된 Ext JS의 기본 CSS와 JavaScript 파일을 연결하는 방법을 아래와 같이 자세히 설명.

## 🌐 DOCTYPE 선언
- `<!DOCTYPE html>`: HTML5 표준을 준수함을 선언하여, 현대적인 웹 표준에 맞게 Ext JS 애플리케이션을 개발할 수 있도록 하자.

## 🖥 `<html>` 태그
- 페이지의 전체 내용을 감싸는 루트 요소. 모든 HTML 요소는 이 `<html>` 태그 내부에 위치해야 합니다.

## 📚 `<head>` 섹션
- 페이지의 메타 데이터, 외부 리소스 링크, 스크립트 등을 정의하는 섹션.

### 🔤 문자 인코딩 설정
- `<meta charset="UTF-8">`: 페이지의 문자 인코딩을 UTF-8로 설정하여 글로벌 언어 지원을 최적화.

### 📄 문서 제목
- `<title>Document</title>`: 브라우저 탭에서 표시될 문서의 제목을 설정.

### 🎨 CSS 스타일시트 링크
- `<link rel="stylesheet" type="text/css" href="../BasicClassicApp-all.css">`: Ext JS 애플리케이션에 적용될 기본 스타일을 정의한 CSS 파일을 문서에 연결. 이 CSS 파일은 Ext JS 컴포넌트의 스타일을 포함하고 있음.

### 📜 JavaScript 파일
- Ext JS 라이브러리(`ext-all-debug.js`)와 애플리케이션의 메인 JavaScript 파일(`index.js`)을 페이지에 포함시킵니다. `ext-all-debug.js`는 디버깅에 유용한 정보를 제공하는 Ext JS 라이브러리의 버전.

### 🖥️ 반응형 웹 디자인
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: 페이지가 다양한 디바이스와 화면 크기에 적절하게 응답하도록 설정.

## 📱 `<body>` 섹션
- 실제 페이지 콘텐츠와 Ext JS로 구성된 UI 컴포넌트를 포함할 부분. 여기에 정의된 JavaScript 코드를 통해 동적인 사용자 인터페이스를 구성하고 Ext JS의 강력한 기능을 활용.

### 이 구조를 이해하고 적용함으로써, Ext JS 애플리케이션 개발을 효율적으로 진행할 수 있으며, Ext JS의 다양한 UI 컴포넌트와 기능을 최대한 활용할 수 있음.
---


# 🌟Ext JS 애플리케이션 예제 코드(index.js) 분석 📘



# 이 자료는 제가 유튜브 보면서 작성한 자료이니 참고용으로 봐주시면 감사하겠습니다! 🎉
