$(function () {
    infoFunction()
})

function infoFunction() {
    $.ajax({
        url: urls.resgin,
        type: 'POST',
        data: {},
        dataType: 'JSON',
        contentType: 'application/x-www-form-urlencoded',
        success: function (res) {
            if (res.code === 1) {
                var a = ` <div class="col_content" >${res.data.content}</div>`;
                $(".layui-col-md10").html(a)
            }
        }
    })
}