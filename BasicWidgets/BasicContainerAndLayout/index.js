// Ext JS 라이브러리가 준비되었는지 확인. 문서가 완전히 로드됐을 때 실행.
Ext.onReady(function(){
    let panel = Ext.create('Ext.panel.Panel',{
        title:'Container and Layout',
        height: 600,
        width: 600,
        layout:'border', 
        items:[{
            region:'north',
            xtype:'container',
            padding: 10,
            layout: 'hbox',
            items:[

            {
                xtype:'textfield',
                fieldLabel:'제목1',
                labelAlign: 'right',
                width: 100,
            },{
                xtype:'textfield',
                fieldLabel:'제목2',
                labelAlign: 'right', 
                width: 100,
                
            },{
                xtype:'container',
                flex: 1,

            },{
                xtype:'button',
                text:'조회',
            }]
        },{
            region:'south',
            xtype:'container',
            width: 100,
            split:true
        },{
            region:'center',
            flex: 1,
            xtype: 'grid',
            width: 300,
            height: 300,
            store: { // store는 콤보 박스의 데이터를 저장하고 관리하는 객체.
                fields: ['value', 'display'], // fields는 이 스토어가 다룰 데이터 모델의 필드를 정의. 여기서는 각 항목의 'value'와 'display' 값을 사용.
                data: [ // data 배열은 콤보 박스에 표시될 실제 데이터를 포함. 각 객체는 'value'와 'display' 필드를 가짐.
                { value: '1', display: 'List' }, // 'value'는 내부적으로 사용되는 값 ('1'은 DB에서 'List'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('List' 선택 옵션으로 표시됨)
                { value: '2', display: 'Tuple' }, // 'value'는 내부적으로 사용되는 값 ('2'는 DB에서 'Tuple'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Tuple' 선택 옵션으로 표시됨)
                { value: '3', display: 'Dict(Dictionary)' }, // 'value'는 내부적으로 사용되는 값 ('3'은 DB에서 'Dict(Dictionary)'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Dict(Dictionary)' 선택 옵션으로 표시됨)
                { value: '4', display: 'Set' }, // 'value'는 내부적으로 사용되는 값 ('4'는 DB에서 'Set'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Set' 선택 옵션으로 표시됨)
                { value: '5', display: 'array'},
                { value: '1', display: 'List' }, // 'value'는 내부적으로 사용되는 값 ('1'은 DB에서 'List'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('List' 선택 옵션으로 표시됨)
                { value: '2', display: 'Tuple' }, // 'value'는 내부적으로 사용되는 값 ('2'는 DB에서 'Tuple'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Tuple' 선택 옵션으로 표시됨)
                { value: '3', display: 'Dict(Dictionary)' }, // 'value'는 내부적으로 사용되는 값 ('3'은 DB에서 'Dict(Dictionary)'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Dict(Dictionary)' 선택 옵션으로 표시됨)
                { value: '4', display: 'Set' }, // 'value'는 내부적으로 사용되는 값 ('4'는 DB에서 'Set'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Set' 선택 옵션으로 표시됨)
                { value: '5', display: 'array'},
                { value: '1', display: 'List' }, // 'value'는 내부적으로 사용되는 값 ('1'은 DB에서 'List'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('List' 선택 옵션으로 표시됨)
                { value: '2', display: 'Tuple' }, // 'value'는 내부적으로 사용되는 값 ('2'는 DB에서 'Tuple'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Tuple' 선택 옵션으로 표시됨)
                { value: '3', display: 'Dict(Dictionary)' }, // 'value'는 내부적으로 사용되는 값 ('3'은 DB에서 'Dict(Dictionary)'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Dict(Dictionary)' 선택 옵션으로 표시됨)
                { value: '4', display: 'Set' }, // 'value'는 내부적으로 사용되는 값 ('4'는 DB에서 'Set'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Set' 선택 옵션으로 표시됨)
                { value: '5', display: 'array'},
                { value: '1', display: 'List' }, // 'value'는 내부적으로 사용되는 값 ('1'은 DB에서 'List'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('List' 선택 옵션으로 표시됨)
                { value: '2', display: 'Tuple' }, // 'value'는 내부적으로 사용되는 값 ('2'는 DB에서 'Tuple'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Tuple' 선택 옵션으로 표시됨)
                { value: '3', display: 'Dict(Dictionary)' }, // 'value'는 내부적으로 사용되는 값 ('3'은 DB에서 'Dict(Dictionary)'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Dict(Dictionary)' 선택 옵션으로 표시됨)
                { value: '4', display: 'Set' }, // 'value'는 내부적으로 사용되는 값 ('4'는 DB에서 'Set'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Set' 선택 옵션으로 표시됨)
                { value: '5', display: 'array'},
                { value: '1', display: 'List' }, // 'value'는 내부적으로 사용되는 값 ('1'은 DB에서 'List'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('List' 선택 옵션으로 표시됨)
                { value: '2', display: 'Tuple' }, // 'value'는 내부적으로 사용되는 값 ('2'는 DB에서 'Tuple'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Tuple' 선택 옵션으로 표시됨)
                { value: '3', display: 'Dict(Dictionary)' }, // 'value'는 내부적으로 사용되는 값 ('3'은 DB에서 'Dict(Dictionary)'를 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Dict(Dictionary)' 선택 옵션으로 표시됨)
                { value: '4', display: 'Set' }, // 'value'는 내부적으로 사용되는 값 ('4'는 DB에서 'Set'을 식별할 때 사용될 수 있음), 'display'는 사용자에게 보여지는 문자열 ('Set' 선택 옵션으로 표시됨)
                { value: '5', display: 'array'}
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
        }],
        renderTo: document.body
    })
}) 

// layout: 'absolute' 절대적 레이아웃 region
// layout: 'fit' : 화면을  채울 때  
// layout: 'anchor' : 순서대로 붙음 
// layout: 'column : columnWidth
// layout: 'table' : 객체로 설정하고 columns 속성 type:table colspans
// layout: 'vbox': 세로나열
// layout: 'hbox': 가로나열
// 세로 속성에 더할 때 pack 속성 align 가로 선언 stretch // flex 1 