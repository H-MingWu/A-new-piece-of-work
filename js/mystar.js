// poem
var words=[
    '似此星辰非昨夜',
    '为谁风露立中宵',
    '但愿人长久',
    '千里共婵娟',
    '好好吃饭，别饿着',
    '天冷了，注意保暖',
    '希望你每天健康快乐',
    '我也一样',
    '山无棱',
    '江水为竭',
    '思之若狂',
    '好想回到那个夏天',
    '偷偷表白一个女孩',
    '还会有再见的那一天吗',
    '有的，一定会有',
    '应是元夕日',
    '提灯见故人',
    '我见青山多妩媚',
    '料青山见我应如是',
    '春去了',
    '秋去了',
    '佳偶再难得',
    '死生奈若何',
    '人生自是有情痴',
    '此恨不关风与月',
    '很多时候，我都觉得，我很孤独',
    '唯有你在的时候',
    '我觉得如此心安',
    '我不喜欢世界的孤独冰冷',
    '满座衣冠皆老朽',
    '黄泉故事无止休',
    '益-风月拂刀',
    '情不所起',
    '一往而深',
    '玲珑骰子安红豆',
    '入骨相思知不知',
    '多情只有春庭月',
    '尤为离人照落花',
    '若有知音见采',
    '不辞唱遍阳春',
    '休言半纸无多重',
    '万斛离愁尽耐担',
    '夜月一帘幽梦',
    '醉后不知天在水',
    '满船星梦压星河',
    '其实，很想有一天',
    '微雨燕双飞',
    '掬水月在手',
    '弄花香满衣',
    '跌落人间的你',
    '滴落在了我心里',
    '也许，也许',
    '你是我的劫',
    '也不一定',
    '江山不及君一笑',
    '魂归之处是苍茫',
    '有一天，你睡前，也会道一声',
    '晚安',
    '想得美',
    '是啊，想想就美',
    '晚安呀'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '希望，你喜欢';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '真正的爱，不需要太多的言语';
        texttwo.innerHTML = '你在身边，吾不羡仙';
        textthree.innerHTML = '心同在，生死不分离';
      },112500)


 
