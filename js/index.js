$(function ($) {
    cImg()
    $(".history_go").click(function () {
        window.history.go(-1)
    })
})

// 获取主页简介
function cImg() {
    $.ajax({
        url: urls.info,
        type: 'POST',
        data: {},
        dataType: 'JSON',
        contentType: 'application/x-www-form-urlencoded',
        success: function (res) {
            console.log(res);
            if (res.code === 1) {
                var v
                var a = `<div class="layui-col-md12">
                        ${res.data.title}
                        </div>
                        <div class="layui-col-md10">
                            <div class="col_content">
                                ${res.data.content}
                                <div class="button_posi">
                                <button type="button" class="btn_1 layui-btn layui-btn-lg layui-btn-primary">
                                      <i class="layui-icon layui-icon-up"></i>
                                </button>
                                <button type="button" class="btn_2 layui-btn layui-btn-lg layui-btn-primary">
                                      <i class="layui-icon layui-icon-down"></i>
                                </button>
                                </div>    
                            </div>
                        </div>`;
                $(".layui-col-md8").html(a)
                $(".button_posi .btn_2").click(function () {
                    v = $(".layui-col-md8").scrollTop()
                    v = v + 100
                    $(".layui-col-md8").scrollTop(v)
                })
                $(".button_posi .btn_1").click(function () {
                    v = $(".layui-col-md8").scrollTop()
                    v = v - 100
                    $(".layui-col-md8").scrollTop(v)
                })
            }
        }
    })
}

