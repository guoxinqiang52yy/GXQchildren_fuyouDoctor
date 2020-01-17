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
                        stringHtml += `<div><input type="hidden" value="${datas.content}">
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
                        stringHtml += `<div carousel-item>`
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

//楼层id
function img_1Function() {
    $.ajax({
        url: urls.getNews,
        type: 'POST',
        data: {},
        dataType: 'JSON',
        contentType: 'application/x-www-form-urlencoded',
        success: function (res) {
            if (res.code === 1) {

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
            id: 3
        },
        dataType: 'JSON',
        contentType: 'application/x-www-form-urlencoded',
        success: function (res) {
            if (res.code === 1) {
                $.each(res.data, (i, val) => {
                    if (val.id === 15 || val.id === 16 || val.id === 17 || val.id === 20 || val.id === 18 || val.id === 19) {
                        var a = `<a href="floor3.html?id=${val.id}">
                            <div class="clumn_1">
                                ${val.name}
                            </div>
                        </a>`;
                        $(".layui-col-md8 .layui-col-md12").append(a)
                    } else {
                        var b = ''
                        if (val.id === 21) {
                            b = `<span class="three_d_21">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_21">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 22) {
                            b = `<span class="three_d_22">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_22">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 23) {
                            b = `<span class= "three_d_23"id =${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_23">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 24) {
                            b = `<span class="three_d_24" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_24">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 25) {
                            b = `<span class= "three_d_25" id =${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_25">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 26) {
                            b = `<span class="three_d_26" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_26">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 27) {
                            b = `<span class="three_d_27" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_27">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 28) {
                            b = `<span class="three_d_28" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_28">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 29) {
                            b = `<span class="three_d_29" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_29">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 70) {
                            b = `<span class="three_d_70" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_70">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 71) {
                            b = `<span class="three_d_71" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_71">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 72) {
                            b = `<span class="three_d_72" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_72">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 73) {
                            b = `<span class="three_d_73" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_73">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 74) {
                            b = `<span class="three_d_74" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_74">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 75) {
                            b = `<span class="three_d_75" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_75">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 76) {
                            b = `<span class="three_d_76" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_76">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 77) {
                            b = `<span class="three_d_77" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_77">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 78) {
                            b = `<span class="three_d_78" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_78">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 79) {
                            b = `<span class="three_d_79" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_79">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 80) {
                            b = `<span class="three_d_80" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_80">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 81) {
                            b = `<span class="three_d_81" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_81">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 82) {
                            b = `<span class="three_d_82" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_82">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 83) {
                            b = `<span class="three_d_83" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_83">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 84) {
                            b = `<span class="three_d_84" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor3.html?id=${val.id}"><span class="three_d_84">${val.name}</span></a>`
                            }
                        }
                        $(".layui-col-md10").append(b)
                    }
                })
            }
        }
    })
}