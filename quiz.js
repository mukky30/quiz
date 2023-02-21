const quiz = [
    {question : '長谷川直叶のtintinの長さは？(bokki)',
    answers : ['13cm','14cm','15cm','16cm'],
    correct : '15cm'
    },
    {question : '長谷川直叶が大事にしていることは？',
    answers : ['時間を大事に使う','健康に過ごす','人を馬鹿にしない','嘘をつかない'],
    correct : '嘘をつかない'
    },
    {question : '長谷川直叶の好きなゲームは？',
    answers : ['fallguys','apex','dbd','cod'],
    correct : 'cod'
    },
    {question : '長谷川直叶が彼女に求めるおっぱいの最低サイズは？',
    answers : ['B','C','D','E'],
    correct : 'C'
    },{question : 'この中で長谷川直叶が好きなものは？',
    answers : ['宇宙','海','大自然','人体'],
    correct : '宇宙'
    },
    {question : '長谷川直叶が得意なバスケのプレーは？',
    answers : ['シュート','パス','ドリブル','全部'],
    correct : '全部'
    },
    {question : '長谷川直叶が毎日していることは？',
    answers : ['バスケ','筋トレ','オナニー','勉強'],
    correct : 'オナニー'
    },
    {question : '長谷川直叶が好きな下ネタは？',
    answers : ['おまんこ','セックス','ちんちん','ふぇら'],
    correct : 'ちんちん'
    },
    {question : '長谷川直叶の群馬のおばあちゃんの名前は？',
    answers : ['としこ','ちよ','さちこ','みつこ'],
    correct : 'としこ'
    },
    {question : '長谷川直叶が1番好きな食べ物は？',
    answers : ['寿司','ハンバーガー','ピザ','焼肉'],
    correct : 'ハンバーガー'
    },

];

const quizlength = quiz.length;
let quizindex = 0;
let score = 0;



const $button = document.getElementsByTagName('button');
    

// クイズの問題文と選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizindex].question;
    
    // $button[0].textContent = answers[0]
    // $button[1].textContent = answers[1]
    // $button[2].textContent = answers[2]
    // $button[3].textContent = answers[3]
    
    let buttonindex = 0;
    let buttonLength = $button.length;
    while (buttonindex < buttonLength) {
        $button[buttonindex].textContent = quiz[quizindex].answers[buttonindex];
       buttonindex++; 
    }
    
    //↑↓同じ表示になるけど↑の方がすっきり
    
    //document.getElementsByTagName('button')[0].textContent = answers[0];
    //document.getElementsByTagName('button')[1].textContent = answers[1];
    //document.getElementsByTagName('button')[2].textContent = answers[2];
    //document.getElementsByTagName('button')[3].textContent = answers[3];
    

}
setupQuiz();


//クリックされたら正誤判定
const clickHandler = (e) => {
    if(quiz[quizindex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    } else {
        window.alert('ぶっぶー！');
    }

    quizindex++;

    if(quizindex < quizlength){
        setupQuiz();
    }else{
        window.alert('終わりっっっ！あなたの点数は'+score+'/'+quizlength+'です！');
    }

};

let handlerindex = 0;
const buttonlength = $button.length;
while (handlerindex < buttonlength){
    $button[handlerindex].addEventListener('click', (e) => {
        clickHandler(e);
        });
        handlerindex++;
}



// クリックされた要素に対して何かしたいときはe.targetで書くことが可能

