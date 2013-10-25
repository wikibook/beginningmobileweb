<%
  param = request.form("param")    
%>

<div>
    <div class="toolbar">
        <h1>P0ST</h1>
        <a class="back" href="#">back</a>
    </div>
    <ul class="edgetoedge">
      <li href="#"><%=param %></li>      
    </ul>
</div>
