// Ext JS 라이브러리가 준비되었는지 확인. 문서가 완전히 로드됐을 때 실행.
Ext.onReady(function(){
    let textfield = Ext.create('Ext.form.TextField', {
        fieldLabel: '위에서 추가된 텍스트'
    })
    // Ext JS의 패널 생성 함수. 패널은 UI 컴포넌트 중 하나로,  다양한 UI 요소를 담을 수 있음.
    // 여기서는 'Ext.panel.Panel'을 사용하여 패널 컴포넌트를 생성하는 명령.
    Ext.create('Ext.panel.Panel', {
        title: 'My Panel', // 패널 상단에 표시될 제목.
        renderTo:document.body, // 생성된 패널을 문서의 body에 렌더링(표시).
        width: 800, // 패널의 너비를 픽셀 단위로 설정.
        height: 600, // 패널의 높이를 픽셀 단위로 설정.
        rootView: true,
         // 'items' 속성을 사용하여 이 패널(부모 패널) 내에 포함될 자식 요소들을 배열로 정의합니다.
         // 이 배열 안에 있는 각 객체는 패널 안에 추가될 UI 컴포넌트(자식 요소)를 나타냄.
        items: [
                textfield
            ,{
            xtype:'panel',
            width: 100,
            height: 50,
            html: 'aaa',
            
        },{
            xtype: 'textfield', // xtype 속성으로 컴포넌트의 타입을 지정합니다. 'textfield'는 텍스트 입력 필드를 의미.
            fieldLabel: '제목', // 입력 필드 옆에 표시될 라벨.
            labelWidth: 60, // 라벨의 너비를 픽셀 단위로 설정.
            width: 160 // 입력 필드 자체의 너비를 픽셀 단위로 설정.
        },{
            xtype: 'datefield', // xtype은 ExtJS에서 UI 구성 요소의 타입을 정의하는데 사용됨. 'datefield'는 사용자가 날짜를 선택할 수 있는 입력 필드를 의미.
            fieldLabel: '날짜', // fieldLabel은 해당 필드 옆에 표시될 레이블(설명)을 지정합니다. 여기서는 '날짜'로 설정되어 있음.
            labelWidth: 60, // labelWidth는 레이블의 너비를 픽셀 단위로 설정합니다. 이 경우 60픽셀로 설정됨.
            width: 200 // width는 전체 필드의 너비를 픽셀 단위로 설정합니다. 여기서는 200픽셀로 설정됨.
        },{
            xtype: 'combobox', // 'combobox'는 드롭다운 목록이 포함된 입력 필드를 만듦. 사용자가 여러 옵션 중 하나를 선택할 수 있음.
            fieldLabel: '선택', // 입력 필드 옆에 표시될 라벨.
            labelWidth: 60,// 라벨의 너비를 픽셀 단위로 설정.
            width: 200, // 입력 필드 자체의 너비를 픽셀 단위로 설정.
            valueField: 'value', // valueField는 콤보 박스에서 선택된 항목의 "값"을 나타내는 필드를 지정. 이 경우 선택된 항목의 'value' 속성값을 사용.
            displayField: 'display', // displayField는 콤보 박스에 표시될 항목들의 "표시" 텍스트를 나타내는 필드를 지정. 'display' 속성의 값을 사용.
            store: { // store는 콤보 박스의 데이터를 저장하고 관리하는 객체.
                fields: ['value', 'display'], // fields는 이 스토어가 다룰 데이터 모델의 필드를 정의. 여기서는 각 항목의 'value'와 'display' 값을 사용.
                data: [ // data 배열은 콤보 박스에 표시될 실제 데이터를 포함. 각 객체는 'value'와 'display' 필드를 가짐.
                { value: '1', display: 'List' }, // 'value'는 내부적으로 사용되는 값 ('1'은 DB에서 'List'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('List' 선택 옵션으로 표시됨)
                { value: '2', display: 'Tuple' }, // 'value'는 내부적으로 사용되는 값 ('2'는 DB에서 'Tuple'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Tuple' 선택 옵션으로 표시됨)
                { value: '3', display: 'Dict(Dictionary)' }, // 'value'는 내부적으로 사용되는 값 ('3'은 DB에서 'Dict(Dictionary)'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Dict(Dictionary)' 선택 옵션으로 표시됨)
                { value: '4', display: 'Set' } // 'value'는 내부적으로 사용되는 값 ('4'는 DB에서 'Set'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Set' 선택 옵션으로 표시됨)
                ]
            } 
            
        },{
            xtype: 'button', // 'button'은 클릭 가능한 버튼 UI를 만듦.
            text: '버튼', // 버튼 위에 표시될 텍스트. 여기서는 '버튼'이라고 설정.
            width: 100 ,// 버튼의 너비를 100픽셀로 설정.
            handler:function(){ // 버튼 클릭 시 실행될 함수(이벤트 핸들러)를 정의.
                var panel = this.up('[rootView=true]'); // 이 버튼이 속한 패널을 찾음. 'rootView=true' 속성을 가진 가장 가까운 상위 컴포넌트를 선택.
                if (!panel.isTextFieldAdded) { // 만약 패널에 텍스트 필드가 아직 추가되지 않았다면 (isTextFieldAdded 속성이 false 또는 undefined인 경우)
                        panel.add(Ext.create('Ext.form.TextField',{ // 패널에 새로운 텍스트 필드를 추가.
                            fieldLabel: '추가 텍스트' // 텍스트 필드의 라벨을 추가.
                        }))
                        panel.isTextFieldAdded = true; // 텍스트 필드가 추가되었으므로, 패널의 isTextFieldAdded 속성을 true로 설정. 이로써 재추가를 방지.
                } else { // 만약 패널에 이미 텍스트 필드가 추가되었다면 (isTextFieldAdded 속성이 true인 경우)
                    Ext.Msg.alert('경고','이미 텍스트 필드가 생성되었습니다.') // 사용자에게 경고 메시지를 표시
                }
            }
        },{
            xtype: 'grid',
            width: 300,
            height: 300,
            store: { // store는 콤보 박스의 데이터를 저장하고 관리하는 객체.
                fields: ['value', 'display'], // fields는 이 스토어가 다룰 데이터 모델의 필드를 정의. 여기서는 각 항목의 'value'와 'display' 값을 사용.
                data: [ // data 배열은 콤보 박스에 표시될 실제 데이터를 포함. 각 객체는 'value'와 'display' 필드를 가짐.
                { value: '1', display: 'List' }, // 'value'는 내부적으로 사용되는 값 ('1'은 DB에서 'List'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('List' 선택 옵션으로 표시됨)
                { value: '2', display: 'Tuple' }, // 'value'는 내부적으로 사용되는 값 ('2'는 DB에서 'Tuple'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Tuple' 선택 옵션으로 표시됨)
                { value: '3', display: 'Dict(Dictionary)' }, // 'value'는 내부적으로 사용되는 값 ('3'은 DB에서 'Dict(Dictionary)'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Dict(Dictionary)' 선택 옵션으로 표시됨)
                { value: '4', display: 'Set' } // 'value'는 내부적으로 사용되는 값 ('4'는 DB에서 'Set'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Set' 선택 옵션으로 표시됨)
                ]
            } ,
            columns:[{
                text: '값',
                dataIndex: 'value',
                with: 100
            },{
                text: '보여주는항목',
                dataIndex: 'display',
                flex:1
            }]
        }]
    })
}) 
