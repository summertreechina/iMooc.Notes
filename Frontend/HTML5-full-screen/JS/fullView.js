// fullView.js

function fullView(event) {

  var btn = this;
  var ele = this.id;
  var tgt = document.querySelector('.tgt' + ele);
  var state = btn.classList;

  if (state == 'off') {
    enterFS(tgt);
    btn.classList.remove('off');
    btn.classList.add('on');
  } else {
    exitFS();
    btn.classList.remove('on');
    btn.classList.add('off');
  }
}

function enterFS(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFS() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

// Usage

/*
Requirements: 
  A trigger element
  A 触发器元素
    ex. <button>, <a>, etc.
    例如 按钮 链接 等等

  A target element
  A 目标元素
    ex. <body>, <section>, <div>, etc.
    例如 body 片段 等等

  Assign an id to the trigger.
  分配一个ID给触发器元素
    ex. <button id='btn1'></button>
    例如 按钮

  Assign a specific class to the target.      
  分配一个指定的类给目标元素      
  There is a naming pattern:
  这是一个命名模式
    '.tgt'+{{id of trigger}}
    ex. .tgtbtn1
      <body class='tgtbtn1'>

  Add an eventListener() to trigger.
  给触发器元素增加一个事件监听
    var btn1 = document.getElementById('btn1');

  Use fullView as the eventHandler
    btn1.addEventListener('click', fullView, false);  ！！！重要方法


*/
