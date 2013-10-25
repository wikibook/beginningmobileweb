// 리스트 메뉴 구성을 위한 데이터모델과 스토어 정보를 정의한다
Ext.regModel('Menu', {
    fields: ['menuName', 'card', 'animation', 'url']
});

menuStore = new Ext.data.Store({
    model: 'Menu',
    data: [
    { menuName: '박종명의 모바일 플랫폼', card: 'List', animation: 'slide', url: 'http://m.mkexdev.net/rss' },
    { menuName: 'Sencha Blog', card: 'List', animation: 'fade', url: 'http://feeds.feedburner.com/extblog' },
    { menuName: 'jQuery Mobile', card: 'List', animation: 'pop', url: 'http://feeds.feedburner.com/JQM' },
    { menuName: 'jQTouch', card: 'List', animation: 'cube', url: 'http://feeds.feedburner.com/JQT' }
  ]
});

Ext.setup({
    // 홈 화면 아이콘 및 애플리케이션 시작 아이콘 정보를 설정한다
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    statusBarStyle: 'default',    

    onReady: function () {
        var currentAnimation;   // 패널 이동 애니메이션 정보
        var toolBar;            // 툴바
        var backButton;         // Back 버튼

        var panel = new Ext.Panel({
            fullscreen: true,

            // 패널 상단에 툴바를 추가한다
            dockedItems: [
                toolBar = new Ext.Toolbar({
                    dock: 'top',
                    xtype: 'toolbar',
                    title: 'RSS Reader',
                    items: [
                        // 툴바에 Back 버튼 추가
                        backButton = new Ext.Button({
                            ui: 'back',
                            text: 'Back',
                            hidden: true,
                            handler: function () {
                                // 뒤로 가기 수행. 역방향 애니메이션 효과 지정
                                panel.setActiveItem(0, { type: currentAnimation, reverse: true })
                                //메인 화면에서는 툴바의 타이틀을 초기화하고 Back 버튼을 숨긴다
                                toolBar.setTitle('RSS Reader');                                
                                backButton.hide(); 
                            }
                        })
                    ]
                })
            ],

            //CardLayout 설정
            layout: 'card',

            //패널에 리스트 컨트롤을 추가한다
            items: [{
                xtype: 'list',
                store: menuStore,       // Store 지정
                itemTpl: '{menuName}',  // 리스트 아이템으로 출력할 템플릿 지정              

                // 이벤트 바인딩(리스트 컨트롤의 Itemtap 이벤트)
                listeners: {
                    itemtap: function (dataView, index, item, eventObject) {
                        // 탭 이벤트가 발생한 리스트 아이템 조회
                        record = dataView.getRecord(item);
                        if (record) {
                            // 툴바의 타이틀을 리스트 아이템 이름으로 변경
                            toolBar.setTitle(record.data['menuName']);
                            // back 버튼 활성화
                            backButton.show();

                            // 패널 이동 애니메이션 정보 저장
                            currentAnimation = record.data['animation'];

                            // 이동하게 될 패널 객체 생성
                            list = eval(record.data['card']);

                            // 이동하게 될 패널로 RSS 주소 넘김
                            list.url = record.data['url'];

                            // 패널 활성화(화면 전환, 패널 이동)
                            panel.setActiveItem(list, currentAnimation || 'slide');
                        }
                    }
                }

            }]

        });
    }
});
