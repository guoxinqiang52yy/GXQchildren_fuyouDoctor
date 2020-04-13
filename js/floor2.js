$(function ($) {
    var datas
    layui.use(['layer', 'flow', 'carousel'], function () {
        var layer = layui.layer
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
                    console.log(res.data);
                    $(".layui-col-md8").html("")
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
            id: 2
        },
        dataType: 'JSON',
        contentType: 'application/x-www-form-urlencoded',
        success: function (res) {
            if (res.code === 1) {
                $.each(res.data, (i, val) => {
                    if (val.id === 6 || val.id === 7) {
                        var a = `<a href="floor2.html?id=${val.id}">
                            <div class="clumn_1">
                                ${val.name}
                            </div>
                        </a>`;
                        $(".layui-col-md8 .layui-col-md12").append(a)
                    } else {
                        var b = ''
                        if (val.id === 8) {
                            b = `<span class="three_d_18">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_18">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 11) {
                            b = `<span class="three_d_19">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_19">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 13) {
                            b = `<span class= "three_d_20"id =${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_20">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 46) {
                            b = `<span class="three_d_46" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_46">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 47) {
                            b = `<span class= "three_d_47" id =${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_47">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 48) {
                            b = `<span class="three_d_48" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_48">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 50) {
                            b = `<span class="three_d_50" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_50">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 51) {
                            b = `<span class="three_d_51" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_51">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 52) {
                            b = `<span class="three_d_52" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_52">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 53) {
                            b = `<span class="three_d_53" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_53">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 54) {
                            b = `<span class="three_d_54" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_54">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 55) {
                            b = `<span class="three_d_55" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_55">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 57) {
                            b = `<span class="three_d_57" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_57">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 58) {
                            b = `<span class="three_d_58" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_58">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 59) {
                            b = `<span class="three_d_59" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_59">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 60) {
                            b = `<span class="three_d_60" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_60">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 61) {
                            b = `<span class="three_d_61" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_61">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 62) {
                            b = `<span class="three_d_62" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_62">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 63) {
                            b = `<span class="three_d_63" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_63">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 64) {
                            b = `<span class="three_d_64" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_64">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 65) {
                            b = `<span class="three_d_65" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_65">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 66) {
                            b = `<span class="three_d_66" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_66">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 67) {
                            b = `<span class="three_d_67" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_67">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 68) {
                            b = `<span class="three_d_68" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_68">${val.name}</span></a>`
                            }
                        }
                        if (val.id === 69) {
                            b = `<span class="three_d_69" id=${val.id}">${val.name}</span>`
                            if (val.click === 1) {
                                b = `<a href="floor2.html?id=${val.id}"><span class="three_d_69">${val.name}</span></a>`
                            }
                        }
                        $(".layui-col-md10").append(b)
                    }
                })
            }
        }
    })
}