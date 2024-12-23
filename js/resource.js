// // 选择搜索引擎
// $('.Select-box ul').hover(function () {
//     $(this).css('height', 'auto');
// }, function () {
//     $(this).css('height', '40px');
// });
//
// $('.Select-box-2 ul').hover(function () {
//     $(this).css('height', 'auto');
// }, function () {
//     $(this).css('height', '46px');
// });
//
// $('.Select-box li').click(function () {
//     var _tihs = $(this).attr('class');
//     var _html = $(this).html();
//     if (_tihs == 'baidu') {
//         _tihs = 'https://www.baidu.com/s';
//         _name = 'wd';
//     }
//     if (_tihs == 'google') {
//         _tihs = 'https://www.google.com/search';
//         _name = 'q';
//     }
//     if (_tihs == 'bing') {
//         _tihs = 'https://www.bing.com/search';
//         _name = 'q';
//     }
//     $('.baidu form').attr('action', _tihs);
//     $('.this_s').html(_html);
//     $('#kw').attr('name', _name);
//     $('.Select-box ul').css('height', '40px');
// });
//
// $('.Select-box-2 li').click(function () {
//     var _tihs = $(this).attr('class');
//     var _html = $(this).html();
//     if (_tihs == 'baidu') {
//         _tihs = 'https://www.baidu.com/s';
//         _name = 'wd';
//     }
//     if (_tihs == 'google') {
//         _tihs = 'https://www.google.com/search';
//         _name = 'q';
//     }
//     if (_tihs == 'bing') {
//         _tihs = 'https://www.bing.com/search';
//         _name = 'q';
//     }
//     $('.baidu form').attr('action', _tihs);
//     $('.this_s').html(_html);
//     $('#kw-2').attr('name', _name);
//     $('.Select-box-2 ul').css('height', '48px');
// });
//
// // 清空输入框内容
// $('.qingkong').click(function () {
//     cls();
//     $(this).css('display', 'none');
// });
//
// function cls() {
//     var t = document.getElementsByTagName("INPUT");
//     for (var i = 0; i < t.length; i++) {
//         if (t[i].type == 'text') {
//             t[i].value = ""; // 清空
//         }
//     }
// }
//
// // 清空输入框按钮的显示和隐藏
// function if_btn() {
//     var btn_obj = document.getElementById("kw") || document.getElementById("kw-2");
//     var cls_btn = document.getElementById("qingkong");
//     var btn_obj_val;
//     var times;
//     if (btn_obj == '' || btn_obj == null) {
//         return false;
//     }
//     btn_obj.onfocus = function () {
//         times = setInterval(function () {
//             btn_obj_val = btn_obj.value;
//             if (btn_obj_val != 0) {
//                 cls_btn.style.display = "block";
//             } else {
//                 cls_btn.style.display = "none";
//             }
//         }, 200);
//     };
//     btn_obj.onblur = function () {
//         clearInterval(times);
//     };
// }
//
// // 每天切换 banner 图
// // <% if (theme.banner.enable) { %>
// //     $('.bg-cover').css('background-image', 'url(/medias/banner/' + new Date().getDay() + '.jpg)');
// //     <% } else { %>
// //     $('.bg-cover').css('background-image', 'url(/medias/banner/0.jpg)');
// //     <% } %>
// 选择搜索引擎
$('.Select-box-2 select').change(function () {
    var _tihs = $(this).val(); // 获取选择的搜索引擎
    var _html = $(this).find('option:selected').text(); // 获取选中的文本
    var _name;

    // 根据选中的搜索引擎设置不同的 URL 和参数名称
    if (_tihs == 'baidu') {
        _tihs = 'https://www.baidu.com/s';
        _name = 'wd';
    }
    if (_tihs == 'google') {
        _tihs = 'https://www.google.com/search';
        _name = 'q';
    }
    if (_tihs == 'bing') {
        _tihs = 'https://www.bing.com/search';
        _name = 'q';
    }

    // 更新表单的 action 和输入框的 name 属性
    $('.baidu form').attr('action', _tihs);
    $('.this_s').html(_html); // 更新显示的文本
    $('#kw-2').attr('name', _name);
});

// 清空输入框内容
$('.qingkong').click(function () {
    cls();
    $(this).css('display', 'none');
});

// 清空输入框
function cls() {
    var t = document.getElementsByTagName("INPUT");
    for (var i = 0; i < t.length; i++) {
        if (t[i].type == 'text') {
            t[i].value = ""; // 清空
        }
    }
}

// 清空输入框按钮的显示和隐藏
function if_btn() {
    var btn_obj = document.getElementById("kw") || document.getElementById("kw-2");
    var cls_btn = document.getElementById("qingkong");
    var btn_obj_val;
    var times;
    if (btn_obj == '' || btn_obj == null) {
        return false;
    }
    btn_obj.onfocus = function () {
        times = setInterval(function () {
            btn_obj_val = btn_obj.value;
            if (btn_obj_val != 0) {
                cls_btn.style.display = "block";
            } else {
                cls_btn.style.display = "none";
            }
        }, 200);
    };
    btn_obj.onblur = function () {
        clearInterval(times);
    };
}
