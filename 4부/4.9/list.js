(function () {
    // RSS 데이터를 위한 데이터모델과 스토어 정보를 정의한다
    Ext.regModel('RSS', {
        fields: ['title', 'pubDate', 'description', 'link']
    });

    // 리스트 아이템 템플릿 정의(RSS 데이터 디스플레이 템플릿)
    var tpl = new Ext.XTemplate(
      '<tpl for=".">',
      '<div class="list"><a href="{link}">{title}</a>  <small><i>({pubDate})</i></small></div>',
      '</tpl>'
    );
    
    var jsonStore = new Ext.data.Store({
        model: 'RSS'
    });

    // 패널 생성 정보
    var cfg = {
        fullscreen: true,
        layout: 'fit',
        url: '', //RSS 주소        
        
        //패널에 리스트 컨트롤 추가
        items: new Ext.List({            
            store: jsonStore,   // Store 지정
            itemTpl: tpl,       // 템플릿 지정

            // Disclosure icon을 선택하면 실행될 함수 정의 
            onItemDisclosure: function (record, btn, index) {                
                // RSS 본문 내용 일부를 메시지박스로 보여줌
                Ext.Msg.alert('Message', record.data['description'], Ext.emptyFn);
            }            
        }),

        // 이벤트 바인딩(패널 show 이벤트)
        listeners:
        {
            // 패널이 활성화 될 때 실제 서버 요청을 시작한다
            show: function () {                
                // 프록시 객체 생성(JSON타입의 Ajax 프록시 생성)
                // Server.aspx로 RSS 주소를 넘긴다
                proxy = new Ext.data.AjaxProxy({
                    url: 'Server.aspx?url=' + this.url,
                    reader: {
                        type: 'json',
                        root: 'item'
                    }
                });

                // Store에 프록지 지정
                jsonStore.setProxy(proxy);
                // Store 로드(Ajax 호출, JSON 결과를 로드한다)
                jsonStore.load();                                
            }
        }       
    };

    // 앞에서 설정한 정보를 바탕으로 패널 객체 생성
    // List라는 이름의 객체 변수에 저장.  이 객체는 화면 전환시 사용된다
    List = new Ext.Panel(cfg);

})();
