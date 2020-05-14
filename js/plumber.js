(function(){
  stageLevel();
  let toStage = getUrlParam("s");
  if (!(toStage && toStage > 0 && toStage <= 16)) {
    toStage = null;
  }
  if (toStage == null) {
    toStage = localStorage.getItem('plumber.stage');
  }
  var stage = toStage || 1,
      active = 1,
      levelCount = $('div[class^=level]').length,
      createLevelState = 0;
  setTheme();
  createLevels();
  showLevels();
  
  $('body').on('click','.block',function(){
    var x = $(this).attr('class').replace(/\D+/g,'');
    if(active && x){
      $(this).removeClass('r' + x);
      x++;
      if($(this).hasClass('straight')){
        if(x == 3) x = 1;
      }else if(x == 5){
        x = 1;
      }
      $(this).addClass('r' + x);
      if(!createLevelState){
        combination();
      }else{
        levelStats();
      }
    }
  });
  
  //d
  
  $('#theme').click(function(){
    $('body').toggleClass('light');
    if($('body').attr('class') == 'light') {
      $('#theme').text('关灯');
    }else{
      $('#theme').text('开灯');
    }
    localStorage.setItem('theme', $('body').attr('class'));
  });
  
  function stageLevel() {
    var count = 1;
    var stageLevel = '';
    stageLevel += '<div class="level' + count++ + '" data-code="1231243" data-set="e1.b.c2.c3.c1.s2.c4.e2" data-text="<center>Rotation Game <br><span>Click a block to complete the pipe.</span></center>"></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="2323114311231414" data-set="c1.c2.c4.c1.s2.c3.c1.e1.s1.e2.c1.c3.c4.c1.c2.c3"></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="42232324114122322243" data-set="e2.s1.s2.c2.c2.c1.c1.c1.s2.c2.c2.b.c2.s2.s2.c1.c1.s1.s1.c1.e2.b.b.b"></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="2222423124111111414" data-set="b.c1.s1.e1.c1.c1.c1.c2.s2.c2.c2.s2.s2.s1.e2.s1.c2.c1.c2.c2"></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="222314311113443" data-set="c2.s1.s2.c1.s2.e1.c1.s1.s1.b.s2.s2.e1.e1.c1.e1" data-text="Multiple pipes."></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="112413123111111414" data-set="b.e1.e2.b.c2.c1.c1.c1.s1.c1.c1.s2.s1.s2.s2.s1.c2.c1.c1.c2"></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="2323141423231414" data-set="c4.c1.c3.c1.c2.c3.c4.c1.c2.c1.c3.c2.c1.c1.c2.c1" data-text="Circles."></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="222312242211314311143" data-set="c4.s1.s1.c1.c2.s2.s2.c1.b.c2.e3.e4.b.c2.c1.s2.e3.c2.s2.s1.b.c1.c2.e1"></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="222244312241123132414" data-set="b.c1.s1.e2.c2.c2.e1.c2.s1.c2.s2.c1.s1.c1.s1.c2.c1.c2.c2.c2.b.c2.c1.b"></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="122311241413422423311231223" data-set="e1.c2.s1.c4.s1.s2.c1.c3.c1.c3.c2.c4.e2.e4.c3.c2.c4.c2.e4.b.s1.c3.s2.c4.c1.s1.e2.e3"></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="432224131431121122331222" data-set="e1.c2.c1.e1.c1.c1.c1.c1.s1.e1.c2.s1.c1.e2.s2.s2.c1.e1.e1.e1.c2.s1.s2.e1"></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="42232224122311113441222" data-set="e2.s1.s2.c1.c2.s2.s1.c2.s2.c1.s2.c2.s1.s2.b.s2.s2.e2.e2.c1.c1.s2.s2.e1"></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="2221223144422231241424" data-set="c1.s1.e1.b.s2.c1.s2.c1.c1.c1.e2.c2.c1.e2.c1.c2.c2.s2.c2.s2.b.e1.s2.c1"></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="1231141442314314442333" data-set="e1.c2.c1.e2.c1.c2.c2.c2.e1.s2.c2.e1.e1.c1.c2.c1.e1.c2.c2.c2.b.b.e1.e2"></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="1223113112434323111111411224" data-set="e1.c2.s1.c2.s2.c1.c1.s2.c2.s2.c1.e1.e1.c1.c2.c1.e1.s1.s2.s2.s1.c1.c1.s2.c1.s2.s2.c1"></div>';
    stageLevel += '<div class="level' + count++ + '" data-code="422122243123241112414224" data-set="e2.s1.e2.e1.c1.s1.s1.c2.e2.e2.c2.c1.c1.c2.s1.s2.c1.s1.c1.s2.e1.s1.s2.c1"></div>';
    document.getElementById('stage').innerHTML = stageLevel;
  }
  
  function combination() {
    var x = $('.level' + stage).find('.block'), h = '';
    $.each(x, function(i, el) {
      h += $(this).attr('class').replace(/\D+/g,'');
    });
    console.info(h);
    if($('.level' + stage).data('code') == h){
      stage++;
      localStorage.setItem('plumber.stage', stage);
      active = 0;
      setTimeout(function(){
        showLevels();
      },500);
    }
  }
  
  function showLevels() {
    var remove = stage - 1;
    $('#win .text span').text(remove);
    if(stage > levelCount){
      $('#finished').fadeIn();
    }else if(stage > 1){
      $('#win').fadeIn();
      setTimeout(function(){
        $('.level' + remove).remove();
        $('div.level' + stage).show();
        $('#win').fadeOut();
        active = 1;
      },2000);
    }else{
      $('div.level' + stage).fadeIn();
    }
  }
  
  function createLevels() {
    $.each($('div[data-set]'), function(i,el){
      var levelHtml = '';
      var set = $(this).data('set').split('.');
      $.each(set, function(i, el) {
        var style = 'curve';
        if(set[i][0] == 's') style = 'straight';
        if(set[i][0] == 'e') style = 'end';
        if(set[i][0] == 'b') style = '';
        var rotate = ''
        if(set[i][1]) var rotate = 'r' + set[i][1];
        var double = ''
        if(set[i][2]) var double = 'double';
        levelHtml += '<div class="block ' + style + ' ' + double + ' ' + rotate + '"></div>';
      });
      var text = $(this).data('text');
      if(text) levelHtml += '<div class="text">'+text+'</div>';
      $(this).append(levelHtml);
    });
  }
  
  function setTheme() {
    if(localStorage.theme == 'light') {
      $('body').addClass('light');
      $('#theme').text('开灯');
    }
  }
  
  function levelStats() {
    var code = '', set = '';
    $.each($('.newLevel .block'),function(i, el){
      var s = $(this).attr('class').split(' ')[1][0];
      if(s != 'b') code += $(this).attr('class').replace(/\D+/g,'');
      var r = Math.floor(Math.random() * 2) + 1;
      if(s != 's') Math.floor(Math.random() * 4) + 1;
      if(s == 'b') r = '';
      set +=  s + r + '.';
    });
    set = set.slice(0, -1);
    $('.stats').html('code: ' + code + ' - Set: ' + set);
  }
  
  $('.toggleCreateLevel').click(function(){
    $('#createLevel .newLevel').empty();
    $('#createLevel').fadeToggle();
    if(!createLevelState){
      createLevelState = 1;
    }else{
      createLevelState = 0;
    }
  });
  
  $('.tools img').click(function(){
    var x = $(this).attr('class');
    $('.newLevel').append('<div class="block ' + x + ' r1"></div>');
  });

  function getUrlParam(name) {
    var query = window.location.search.substring(1);
    var params = query.split("&");
    for (let i = 0; i < params.length; i++) {
      let pair = params[i].split("=");
      if (pair[0] == name) {
        return pair[1];
      }
    }
    return null;
  }
})();