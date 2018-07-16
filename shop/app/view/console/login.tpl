<html>
	<head>
		<title>{{ title }}</title>
		<style>
			.form {
				margin: auto;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				width: 300px;
				height: 350px;
			}
			.button {
				background-color: #0AE; /* Green */
				border: none;
				color: white;
				padding: 3px 19px;
				text-align: center;
				text-decoration: none;
				display: inline-block;
			}
		</style>
	</head>

	<form action="/console/home" class="form">

		<div>
			<label>请输入用户名</label>
			<input type="text" name="username">
		</div>

		<div>
			<label>请输入密码  </label>
			<input type="password" name="password" title="请输入密码">
		</div>

		<div class="button">
			<input type="submit" value="登录" class="button">
		</div>
	</form>

</html>