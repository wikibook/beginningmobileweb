<%@ Page Language="C#" %>
<%@ Import Namespace = "System.Net" %>
<%@ Import Namespace = "System.IO" %>
<%@ Import Namespace = "Newtonsoft.Json.Linq" %>

<!DOCTYPE html> 
<script runat="server">
    
    // 검색 결과 배열
    Newtonsoft.Json.Linq.JArray photoArray;
    
    // 검색 결과 카운트
    int imageCount = 0;
        
    // 페이지 로드 이벤트
    protected override void OnLoad(EventArgs e)
    {
        base.OnLoad(e);

        // 폼 데이터로 전송된, 검색할 이미지 이름
        string imageName = Request["imageName"];        
        
        // 폼 데이터로 전송된, 정렬 기준
        string sortBase = Request["sortBase"];
        string sortDirection = Request["sortDirection"];
        
        // sortBase와 sortMethod를 합쳐 정렬방법을 결정한다
        string sort = sortBase + "-" + sortDirection;                        

        // YQL URL
        string yqlUrl = "http://query.yahooapis.com/v1/public/yql?q=";

        // YQL Query (이미지 이름을 입력하지 않을 경우 최근 이미지를 검색한다)        
        string yqlQuery = String.Empty;        
        if (imageName == null || imageName == String.Empty)
        {
            yqlQuery = "select * from flickr.photos.recent";
            imageName = "Recent";
        }
        else
        {
            yqlQuery = String.Format("SELECT * FROM flickr.photos.search WHERE text='{0}' and sort='{1}'", imageName, sort);
        }

        // Header bar에 검색 이미지 이름을 표시한다
        this.imageTitle.InnerText = imageName;
        
        // YQL 질의를 위한 URL과 Query을 하나로 합친다
        string fullUrl = yqlUrl + yqlQuery + "&format=json";
                
        //닷넷 객체를 이용해 웹 리소스(YQL)를 호출한다
        WebRequest request = WebRequest.Create(fullUrl);
        HttpWebResponse response = (HttpWebResponse)request.GetResponse();
        Stream dataStream = response.GetResponseStream();
        StreamReader reader = new StreamReader(dataStream);
        string responseFromServer = reader.ReadToEnd();

        // 자원 해제
        reader.Close();
        dataStream.Close();
        response.Close();
                                
        // JSON.NET 라이브러리를 이용한 JSON 파싱(JSON 규칙의 일반 문자열을 닷넷 객체로 변환)
        JObject jsonObj = JObject.Parse(responseFromServer);        
        JObject queryObj = (JObject)jsonObj["query"];

        // 검색 결과가 있을 때만 아래 작업을 처리한다
        this.imageCount = (int)queryObj["count"];
        if (this.imageCount > 0)
        {
            JObject resultsObj = (JObject)queryObj["results"];

            JArray photoArray;

            if (imageCount > 1) 
            {
                photoArray = (JArray) resultsObj["photo"];
            }
            else // 결과 이미지가 단 1개일 경우 배열이 아닌 객체 형태로 반환되므로 직접 배열로 만든다
            {
                photoArray = new JArray(resultsObj["photo"]);
            }
            
            this.photoArray = photoArray;
        }
    }        
</script>

<html>
<head>
    <title></title>
</head>
<body>
   <div data-role="page" data-theme="b"> 
    <div data-role="header">
  		<h1 runat="server" id="imageTitle"></h1>
        <a href="index.html" data-icon="home" data-iconpos="notext" data-direction="reverse" class="ui-btn-right">Home</a>
  	</div>  
  	<div data-role="content">	

  		<ul data-role="listview" data-theme="c">
        <% 
            if (this.imageCount > 0)
            {
                for (int i = 0; i < photoArray.Count; i++)
                {
                    string title = (string)photoArray[i]["title"]; //이미지 타이틀
                    string farm = (string)photoArray[i]["farm"]; //farm ID
                    string server = (string)photoArray[i]["server"]; //server ID
                    string id = (string)photoArray[i]["id"]; //이미지 ID
                    string secret = (string)photoArray[i]["secret"]; //secret ID
                    string owner = (string)photoArray[i]["owner"]; //owner ID

                    //위 정보를 기반으로 flicker 이미지 경로를 생성한다(_s 크기 접미사를 사용한다)
                    string imageUrl = String.Format("http://farm{0}.static.flickr.com/{1}/{2}_{3}_s.jpg", farm, server, id, secret); 
               
        %>
            <li>
                <img src="<%=imageUrl %>" />
                <a href="imageView.aspx?title=<%=title %>&farm=<%=farm %>&server=<%=server %>&id=<%=id %>&secret=<%=secret %>&"><%= title%></a>
                <p class="ui-li-aside"><%=owner%></p>
            </li>
        <%      }
            }
            else
            {
        %>
            <li>검색결과가 없습니다</li>
        <% } %>
        </ul>       		
  	</div>  	  	 	  	  		
  </div> 

</body>
</html>
