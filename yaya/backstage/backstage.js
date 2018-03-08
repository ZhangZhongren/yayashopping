// setTimeout(function(){
// 	getdata("http://10.80.13.196:8081/backManagement/selectAllUser?page=1",creatUser);
// },5000)

//查询所有用户渲染到页面
function creatUser(data){
	var data = data.managerList
	var len = data.length;
	var html = `<table class="table">
				<thead>
					<tr>
						<th>id</th>
						<th>真实姓名</th>
						<th>用户名</th>
						<th>密码</th>
						<th>生日</th>
						<th>性别</th>
						<th>地址</th>
						<th>email</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					`;
	for(var i = 0 ; i< len;i++){
		html += `<tr><td>${data[i].userId}</td>
				  <td>${data[i].realName}</td>
				  <td>${data[i].userName}</td>
				  <td>${data[i].password}</td>
				  <td>${data[i].birth}</td>
				  <td>${data[i].sex}</td>
			      <td>${data[i].address}</td>
				  <td>${data[i].email}</td>
				  <td><a class="del" data-id="${data[i].delete_id}">删除</a></td></tr>`;
	}
	html += `</tbody>
			</table>`;
	console.log(html);
	$(".right_con").html(html);

}



function getdata(url,creatUser){
	$.ajax({
		url:"http://10.80.13.196:8081/backManagement/selectAllUser?page=1",
		type:"GET",
		async:true,
		success:function(data){
			var data= JSON.parse(data);
			creatUser(data);
		}
	});
}






