$(function(){
    //인풋에 키프레스 이벤트 정의
    $(".input_area > input[type='text']").keypress(function(event){
        //엔터키 코드(13)일 경우와 인풋에 값이 있을때 실행되는 조건문
        if(event.keyCode == 13 && $(this).val().length != 0){
            var _val = $(this).val(); //입력중인 값을 담는 변수
            var _time; //입력되는 순간의 시간을 담는 변수
            var _class = $(this).attr("class");

            //현재시간 구하기
            var _date = new Date(); //Date라는 객체(pc의 전체시간정보)
            var _hh = _date.getHours();
            var _mm = _date.getMinutes();
            var _apm = "오전";
            if(_hh > 12){
                _apm = "오후"
                //_hh = _hh - 12; 아래줄과 같은 말
                _hh -= 12;
            }
            _time = _apm + " " + _hh + ":" + _mm;
            
            //말풍선 태그를 append로 동적 추가 console.log(_time);
            $(".chat_area").append('<div class="item '+_class+'"><div class="box"><p class="msg">'+_val+'</p><span class="time">'+_time+'</span></div></div>')
            
            setTimeout(function(){ //setTimeout을 이용해서 0.01초 후 호출시킴(시간차 발생)
                $(".chat_area .item").addClass("on"); //itemd에 on클라스 추가(애니메이션 발생시키는 트리거)
            },10);
            //입력후 입력된 인풋의 값을 지워줌 (초기화)
            $(this).val("");

            var _itemL = $(".chat_area .item").length; //말풍선(item)의 갯수
            var _itemH = 0; //말풍선(item)들의 각 높이를 더해줄 변수 (초기화)

            //each라는 반복문 jquery선택자의 길이만큼 반복시킴
            $(".chat_area .item").each(function(idx){
                //this(말풍선) 길이를 _itemH에 누적 추가 + margin-top 15px 값
                //_itemH = _itemH + $(this).height(); 아랫줄과 같은 말
                _itemH += $(this).height()+15; //마진값 추가 해줌
            });
            $(".chat_area").stop().animate({
                scrollTop:_itemH
            })
        }
    });
});