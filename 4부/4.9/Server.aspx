<%@ Page Language="C#" %>
<%@ Import Namespace = "System.Net" %>
<%@ Import Namespace = "System.IO" %>
<%@ Import Namespace = "Newtonsoft.Json.Linq" %>

<script runat="server">    
        
    // 페이지 로드 이벤트
    protected override void OnLoad(EventArgs e)
    {
        base.OnLoad(e);

        // GET 매개변수로 전송된 RSS 주소
        string rssUrl = Request["url"];                                                          

        // YQL URL
        string yqlUrl = "http://query.yahooapis.com/v1/public/yql?q=";
       
        string yqlQuery = String.Empty;
        yqlQuery = String.Format("select * from rss where url='{0}'",rssUrl);
        
                   
        // YQL 질의를 위한 URL과 Query을 하나로 합친다
        string fullUrl = yqlUrl + yqlQuery + "&format=json";
                
        // 닷넷 객체를 이용해 웹 리소스(YQL)를 호출한다
        WebRequest request = WebRequest.Create(fullUrl);
        HttpWebResponse response = (HttpWebResponse)request.GetResponse();
        Stream dataStream = response.GetResponseStream();
        StreamReader reader = new StreamReader(dataStream);
        string responseFromServer = reader.ReadToEnd();

        // 자원 해제
        reader.Close();
        dataStream.Close();
        response.Close();
                                
        // JSON.NET 라이브러리를 이용한 JSON 파싱
        // (JSON 규칙의 일반 문자열을 닷넷 객체로 변환)
        JObject jsonObj = JObject.Parse(responseFromServer);        
        JObject queryObj = (JObject)jsonObj["query"];

        // 검색 결과가 존재할 경우에만 아래 작업을 처리한다
        int resultCount = (int)queryObj["count"];
        if (resultCount > 0)
        {                      
            // JSON 포맷의 문자열로 응답한다
            // YQL결과에서 실제 rss 목록을 담고 있는 results 부분만 응답 데이터로 반환한다
            Response.ContentType = "application/json";
            Response.Write(queryObj["results"]);            
        }                                       
    }        
</script>
