$(function ($) {
    var datas
    layui.use(['layer', 'laypage', 'laytpl', 'flow', 'carousel'], function () {
        var layer = layui.layer
        var laypage = layui.laypage;
        var laytpl = layui.laytpl
        var carousel = layui.carousel;
        $(".history_go").click(function () {
            window.history.go(-1)
        })
        setInterval(function move() {
            $(".radius_content_center img").animate("")
            move()
        }, 2000);

        img_1Function()
        room_1Function()
        localIndex()

        //根据id渲染
        function img_contentFunction(id) {
            $.ajax({
                url: urls.getTypeurl,
                type: 'POST',
                data: {
                    id: id
                },
                dataType: 'JSON',
                contentType: 'application/x-www-form-urlencoded',
                success: function (res) {

                    datas = JSON.parse(JSON.stringify(res.data))
                    var stringHtml = ''
                    var v
                    if (datas.photo_list == null) {
                        stringHtml += `<div class="layui-carousel" id="test1">`
                        stringHtml += `<div carousel-item>`
                        stringHtml += `<div><input style="word-wrap:break-word;" type="hidden" value="${datas.content}">
                                            <div class="button_posi">
                                <button type="button" class="btn_1 layui-btn layui-btn-lg layui-btn-primary">
                                      <i class="layui-icon layui-icon-up"></i>
                                </button>
                                <button type="button" class="btn_2 layui-btn layui-btn-lg layui-btn-primary">
                                      <i class="layui-icon layui-icon-down"></i>
                                </button>
                                </div>
                                <div id="hid" style="padding:10px 10px 0 10px;"></div></div>`
                        stringHtml += `</div>`
                        stringHtml += `</div>`

                        $(".layui-col-md8").html(stringHtml)
                        var catelog = $("input[type=hidden]").val();
                        $("#hid").html(catelog);
                        $(".button_posi .btn_2").click(function () {
                            v = $(".layui-carousel .layui-this").scrollTop()
                            v = v + 100
                            $(".layui-carousel .layui-this").scrollTop(v)
                        })
                        $(".button_posi .btn_1").click(function () {
                            v = $(".layui-carousel .layui-this").scrollTop()
                            v = v - 100
                            $(".layui-carousel .layui-this").scrollTop(v)
                        })
                    } else {
                        stringHtml += `<div class="layui-carousel" id="test1">`
                        stringHtml += `<div carousel-item class="carousel_it">`
                        $.each(datas.photo_list, (i, val) => {
                            stringHtml += `<div><img src="${val.url}" alt="${val.name}"></div>`
                        })
                        stringHtml += `</div>`
                        stringHtml += `</div>`
                        $(".layui-col-md8").html(stringHtml)
                    }
                    carousel.render({
                        elem: '#test1'
                        , width: '100%' //设置容器宽度
                        , height: "100%"
                        , arrow: 'always' //始终显示箭头
                    });
                }
            })
        }

        //获取路由id
        function localIndex() {
            var url = location.search
            var theRequest = new Object()
            if (url.indexOf('?') != -1) {
                var str = url.substr(1)
                var strs = str.split('&')
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1]
                }
            }
            if (theRequest.id != undefined) {
                $(".layui-col-md8").html("")
                img_contentFunction(theRequest.id)
            }
        }
    })
})

//获取楼层id
function img_1Function() {
    $.ajax({
        url: urls.getNews,
        type: 'POST',
        data: {},
        dataType: 'JSON',
        contentType: 'application/x-www-form-urlencoded',
        success: function (res) {
            if (res.code === 1) {
                // var a = ``;
                // $(".layui-col-md8").html(a)
            }
        }
    })
}

//获取科室
function room_1Function() {
    $.ajax({
        url: urls.productList,
        type: 'POST',
        data: {
            id: 1
        },
        dataType: 'JSON',
        contentType: 'application/x-www-form-urlencoded',
        success: function (res) {
            if (res.code === 1) {
                $.each(res.data, (i, val) => {
                    if (val.id === 1 || val.id === 3) {
                        var a = `<a href="details_img.html?id=${val.id}">
                            <div class="clumn_1">
                                ${val.name}
                            </div>
                        </a>`;
                        $(".layui-col-md8 .layui-col-md12").append(a)
                    } else {
                        var b = ''
                        if (val.id === 4) {
                            b = `<span class="three_d_1">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_1">${val.name}</span></a>`

                            }
                        }
                        if (val.id === 5) {
                            b = `<span class="three_d_2">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_2">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 30) {
                            b = `<span class= "three_d_3"id =${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_3">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 31) {
                            b = `<span class="three_d_4" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_4">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 32) {
                            b = `<span class= "three_d_5" id =${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_5">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 33) {
                            b = `<span class="three_d_6" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_6">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 34) {
                            b = `<span class="three_d_7" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_7">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 35) {
                            b = `<span class="three_d_8" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_8">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 36) {
                            b = `<span class="three_d_9" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_9">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 37) {
                            b = `<span class="three_d_10" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_10">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 38) {
                            b = `<span class="three_d_11" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_11">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 39) {
                            b = `<span class="three_d_12" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_12">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 40) {
                            b = `<span class="three_d_13" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_13">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 41) {
                            b = `<span class="three_d_14" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_14">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 42) {
                            b = `<span class="three_d_15" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_15">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 43) {
                            b = `<span class="three_d_16" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_16">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 44) {
                            b = `<span class="three_d_17" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="details_img.html?id=${val.id}"><span class="three_d_17">${val.name}</span></a>`
                            }
                        }
                        $(".layui-col-md10").append(b)
                    }
                })
            }
        }
    })
}

