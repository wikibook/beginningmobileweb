<%@ Page Language="C#" %>
<!DOCTYPE html> 
<script runat="server">
    protected override void OnLoad(EventArgs e)
    {
        base.OnLoad(e);

        // GET 매개변수로 전달받은 데이터
        string title = Request["title"];
        string farm = Request["farm"];
        string server = Request["server"];
        string id = Request["id"];
        string secret = Request["secret"];

        // Header bar에 이미지 타이틀을 표시
        this.imageTitle.InnerText = title;

        // 전달받은 매개변수 정보를 기반으로 flicker 이미지 경로를 생성한다
        // _z 크기 접미사를 사용한다
        string imageUrl = String.Format("http://farm{0}.static.flickr.com/{1}/{2}_{3}_z.jpg", farm, server, id, secret);
        this.detailView.Src = imageUrl;
                       
    }
</script>

<div data-role="page" data-theme="b" data-fullscreen="true"> 

    <div data-role="header" data-position="fixed">
        <h1 runat="server" id="imageTitle"></h1>
        <a href="index.html" data-icon="home" data-iconpos="notext" data-direction="reverse" class="ui-btn-right">Home</a>
    </div>
        
    <div data-role="scrollview" data-type="horizontal"> 
        <img runat="server" id="detailView" src="<%=imageUrl %>" />
    </div>    
    
</div>
